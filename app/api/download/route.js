export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const rawTitle = (searchParams.get('title') || 'Infraspine Resource').slice(0, 70)
  const rawType  = (searchParams.get('type')  || 'Guide').slice(0, 20)
  const rawPages = (searchParams.get('pages') || '').slice(0, 20)

  // Strip to safe ASCII only — no UTF-8 multi-byte characters in PDF streams
  const ascii = (s) => s.replace(/[^\x20-\x7E]/g, '?')
  const esc   = (s) => ascii(s).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

  const title = esc(rawTitle)
  const meta  = esc(rawType + (rawPages ? ' — ' + rawPages : ''))
  const now   = ascii(new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }))
  const year  = new Date().getFullYear()

  // PDF content stream — pure ASCII, no special chars
  const stream = [
    // Header band
    '0.027 0.102 0.216 rg',
    '0 762 612 30 re f',
    '1 g',
    'BT /F1 9 Tf 60 771 Td (INFRASPINE IT SERVICES  |  www.infraspine.com) Tj ET',
    '0 g',
    // Title
    `BT /F2 22 Tf 60 710 Td (${title}) Tj ET`,
    `BT /F1 12 Tf 60 686 Td (${meta}) Tj ET`,
    // Divider
    '0.8 0.8 0.8 RG 1 w 60 672 m 540 672 l S',
    // Body
    'BT /F2 11 Tf 60 650 Td (Prepared by Infraspine IT Services) Tj ET',
    'BT /F1 10 Tf 60 630 Td (This is a preview copy. The full version of this resource is ready for you.) Tj ET',
    'BT /F1 10 Tf 60 611 Td (Contact us below to receive the complete document:) Tj ET',
    '0.8 0.8 0.8 RG 0.5 w 60 600 m 540 600 l S',
    'BT /F1 10 Tf 60 582 Td (Email:    hello@infraspine.com) Tj ET',
    'BT /F1 10 Tf 60 563 Td (WhatsApp: +92 300 123 4567) Tj ET',
    'BT /F1 10 Tf 60 544 Td (Web:      www.infraspine.com/contact-us) Tj ET',
    // Footer band
    '0.961 0.980 0.996 rg',
    '0 0 612 50 re f',
    '0.376 0.494 0.631 rg',
    `BT /F1 8 Tf 60 32 Td (Downloaded: ${now}  |  (c) ${year} Infraspine IT Services. All rights reserved.) Tj ET`,
  ].join('\n')

  // Helper — pad number to 10 digits for xref
  const pad = (n) => String(n).padStart(10, '0')

  // All objects must be pure ASCII so .length === byte count
  const o1 = '1 0 obj\n<</Type /Catalog /Pages 2 0 R>>\nendobj\n'
  const o2 = '2 0 obj\n<</Type /Pages /Kids [3 0 R] /Count 1>>\nendobj\n'
  const o3 = '3 0 obj\n<</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]\n  /Resources <</Font <</F1 4 0 R /F2 5 0 R>>>>\n  /Contents 6 0 R>>\nendobj\n'
  const o4 = '4 0 obj\n<</Type /Font /Subtype /Type1 /BaseFont /Helvetica>>\nendobj\n'
  const o5 = '5 0 obj\n<</Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold>>\nendobj\n'
  const o6 = `6 0 obj\n<</Length ${stream.length}>>\nstream\n${stream}\nendstream\nendobj\n`

  // Calculate exact byte offset of each object
  const header = '%PDF-1.4\n'
  const p1 = header.length
  const p2 = p1 + o1.length
  const p3 = p2 + o2.length
  const p4 = p3 + o3.length
  const p5 = p4 + o4.length
  const p6 = p5 + o5.length
  const body = header + o1 + o2 + o3 + o4 + o5 + o6
  const xrefStart = body.length

  const xref = [
    'xref',
    '0 7',
    '0000000000 65535 f ',
    `${pad(p1)} 00000 n `,
    `${pad(p2)} 00000 n `,
    `${pad(p3)} 00000 n `,
    `${pad(p4)} 00000 n `,
    `${pad(p5)} 00000 n `,
    `${pad(p6)} 00000 n `,
    'trailer',
    '<</Size 7 /Root 1 0 R>>',
    'startxref',
    String(xrefStart),
    '%%EOF',
  ].join('\n')

  const pdf = body + xref
  const filename = rawTitle.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase().slice(0, 50) + '.pdf'

  return new Response(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'no-store',
    },
  })
}
