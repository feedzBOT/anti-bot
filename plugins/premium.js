let handler = async m => m.reply(`
╭─「 BUY PREMIUM 」
│ 
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│
│
│
│ > Harga :
│• 5K / 1 minggu (Join 1 Grup ⭕, premium ❌)
│• 5K / 1 Minggu (premium ⭕, join grup ❌)
│• 15K / Bulan (premium ⭕, join grup ❌)
│• 20K / Bulan (premium ⭕, join 1 Grup ⭕)
│• 35K / 2 Bulan (premium ⭕, join 2 Grup ⭕)
│• 40K / 3 Bulan (premium ⭕, join 3 Grup ⭕)
│
│ > Pembayaran :
│• https://saweria.co/hifeedz
│• pulsa(Tsel)+ Up 5K : 0812-4321-8980 
│• dana : 0812-4321-8980
│○Note: Harap chat dulu ke 
│ https://wa.me/6288705834498
│sebelum order premium.
│
│
│ *Utamakan Dana atau pulsa(Tsel)*
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^remium$/i

module.exports = handler
