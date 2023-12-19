const seedNews = async (prisma) => {
  await prisma.news.createMany({
    data,
  });

  console.log("News seeded successfully");
};

// https://finansial.bisnis.com/
const data = [
  {
    title:
      "Bunga Turun, AdaKami Ingatkan Nasabah untuk Berhitung Lebih Presisi",
    content:
      'Otoritas Jasa Keuangan (OJK) pada 10 November 2023 menerbitkan surat edaran SEOJK Nomor 19/SEOJK.05/2023 yang mengatur mengenai besaran bunga fintech peer to peer lending menjadi maksimum 0,3% per hari efektif mulai dari 1 Januari 2024. Hal ini tentunya disambut baik oleh kebanyakan masyarakat, dalam artian beban yang terjadi untuk pinjaman yang disalurkan akan lebih ringan dan diharapkan layanan ini bisa menjadi solusi keuangan masyarakat.   Perubahan ketentuan ini mengharuskan pelaku usaha / platform peer to peer lending meninjau ulang perhitungan biaya-biaya agar mampu sejalan dengan ketentuan OJK. Penyesuaian perlu dilakukan tidak hanya soal menurunkan bunga namun perlu mempertimbangkan dampak keberlanjutan di waktu mendatang. Bernardino M Vega Jr selaku Direktur Utama Adakami menyikapi perubahan ini, “Kami akan lebih ketat ya, cost akan lebih rendah kita pangkas biaya-biaya yang enggak perlu seperti promosi kita kurangi. Harus lebih jeli ya menyikapi penuruan bunga ini yang pasti cost structure kita sesuaikan. Underwriting process kita bikin semakin efisien, kemudian dari sisi prudency juga kita tingkatkan makanya ada komisaris independen juga." Kabar baik ini tentunya menimbulkan tantangan industri, dimana nilai wanprestasi / TWP 90 tetap perlu dijaga agar kualitas kredit yang disalurkan masih tergolong sehat dan mampu mendorong pertumbuhan ekonomi negara. Pasalnya OJK menyebutkan kredit macet peer to peer lending per Oktober 2023 meningkat menjadi 2,89% dari September 2023 di 2,82%. OJK sendiri menetapkan batas maksimum 5% kredit macet yang dapat ditolerir dari sebuah platform peer to peer lending. Apakah kebijakan baru penurunan bunga ini mampu memperbaiki kondisi kredit macet peer to peer lending di Indonesia? Kesadaran masyarakat masih menjadi kunci kesuksesan kebijakan baru ini. Government Relation Head Adakami, Anna Urbinas menuturkan “Masyarakat umum dan nasabah perlu paham konsekuensi akibat kredit macet yang dilakukan baik secara sengaja maupun tidak. Penurunan bunga pinjaman mendorong industri untuk menyaring secara lebih ketat profil resiko nasabah, dalam artian nasabah dengan profil resiko yang lebih tinggi akan lebih kecil kemungkinannya untuk dapat dilayani oleh industri peer to peer lending”. Anna sendiri mengingatkan nasabah untuk berhitung dengan lebih presisi dalam melakukan pinjaman agar dapat melunasi tempat waktu dan menghindari keterlambatan bahkan jika hanya terlambat 1 hari.  Seringkali nasabah dengan tunggakan kredit berkomentar “baru terlambat 4 hari kok ditagih kayak terlambat 2 bulan” atau dengan ujaran sejenisnya. “Pola pikir seperti ini yang menjadi concern utama AdaKami dalam melakukan edukasi. Nasabah perlu tau bahwa setiap transaksi yang terjadi di AdaKami, wajib dilaporkan ke SLIK OJK, jadi OJK tau siapa saja nasabah yang memiliki keterlambatan sejak hari pertama,” sebut Anna. Belakangan ini kita menemukan berita-berita viral mengenai generasi muda yang gagal mendapatkan pekerjaan karena riwayat tunggakan kredit menjadi penghalang karir. Dampak wanprestasi sudah bisa kita lihat secara langsung.  Anna menambahkan pihaknya kini bekerjasama dengan 4 perbankan nasional sebagai pemberi pinjaman, dimana setiap transaksi ini akan dilaporkan oleh pihak perbankan ke OJK dan Bank Indonesia dengan demikian riwayat pinjaman di AdaKami akan mempengaruhi penilaian SLIK BI / BI Checking. SLIK BI / BI Checking sendiri menjadi kepedulian masyarakat terutama dalam menerima penyaluran kredit dari institusi keuangan konvensional seperti perbankan dan multifinance. Histori buruk pada SLIK BI tentunya akan mempengaruhi akses pendanaan masyarakat di waktu mendatang.  AdaKami sendiri memiliki kewajiban penagihan selama 90 hari sejak tanggal jatuh tempo, sebagai bentuk mitigasi resiko dan bukti pertanggungjawaban terhadap pemilik dana. Polemik debt collector yang berguling memang diawali dari populasi kredit macet yang perlu menjadi nilai merah bagi industri. AdaKami meyakini jika masyarakat memiliki pemahaman dan kesadaran yang baik tentang mengatur keuangan, bersama-sama kita bisa mewujudkan ekosistem keuangan yang sehat dan yang bertahan.',
    headerImg:
      "https://images.bisnis.com/posts/2023/12/15/1724349/bisnis.com-bunga-turun-adakami-ingatkan-nasabah-untuk-berhitung-lebih-presisi-1_1702642442.jpg",
    author: "Media Digital",
    source:
      "https://finansial.bisnis.com/read/20231215/89/1724349/bunga-turun-adakami-ingatkan-nasabah-untuk-berhitung-lebih-presisi",
  },
  {
    title:
      "Ramalan Arah Ekonomi Indonesia Setelah The Fed Beri Sinyal Penurunan Suku Bunga",
    content:
      "Bank Sentral Amerika Serikat (AS), the Fed, kembali mempertahankan suku bunga pada tingkat 5,25-5,5% dalam pertemuan terakhir pada Desember 2023. Pada hari Rabu (13/12/2023) waktu setempat, The Fed mengindikasikan fase pengetatan melalui suku bunga tinggi telah berakhir. Otoritas moneter dari AS itu mengisyaratkan bahwa penurunan suku bunga akan terjadi pada 2024. Kepala Ekonomi Bank Mandiri Andry Asmoro menyampaikan kebijakan mempertahankan suku bunga ini merupakan yang ketiga kalinya dalam 3 pertemuan terakhir. The Fed menyatakan indikator-indikator terbaru menunjukkan pertumbuhan ekonomi melambat, kenaikan lapangan kerja telah moderat tapi tetap kuat, dan tingkat pengangguran tetap rendah. Selain  itu, sistem perbankan AS sehat dan tangguh.  Andry menyampaikan, the Fed telah menaikkan suku bunga sebanyak 11 kali secara simultan dalam 2 tahun terakhir, laju pengetatan yang tercepat sejak awal 1980-an.  Seiring isyarat The Fed akan ada tiga kali pemangkasan suku bunga untuk tahun depan, lebih banyak dari yang diperkirakan oleh sebagian besar investor. Alhasil, indeks dolar AS turun ke 103,2, level terendah dalam lebih dari seminggu. Imbal hasil obligasi pemerintah AS bertenor 10 tahun juga tercatat turun di bawah 4,1%, terendah sejak awal Agustus. Perkembangan ini diharapkan dapat menjadi katalis positif bagi pasar keuangan Indonesia pada perdagangan hari ini. “Yang memungkinkan nilai tukar rupiah terapresiasi terhadap dolar AS, penurunan imbal hasil obligasi, dan kenaikan pasar saham domestik,” katanya, Kamis (14/12/2023).",
    headerImg:
      "https://images.bisnis.com/posts/2023/12/15/1723869/05092023-bi-bio-24-dolar-2.jpg",
    author: "Maria Elena",
    source:
      "https://finansial.bisnis.com/read/20231215/11/1723869/ramalan-arah-ekonomi-indonesia-setelah-the-fed-beri-sinyal-penurunan-suku-bunga",
  },
  {
    title: "Harga Saham Bank Digital ARTO hingga BBHI Kompak Merangkak Naik",
    content:
      'Harga saham emiten bank digital seperti PT Bank Jago Tbk. (ARTO) dan PT Allo Bank Indonesia Tbk. (BBHI) kompak sedang dalam tren penguatan, setidaknya dalam sepekan terakhir. Berdasarkan data RTI Business, harga saham ARTO naik 3,12% pada penutupan perdagangan hari ini, Kamis (14/12/2023) dan terparkir di level Rp3.300. Dalam sepekan harga saham ARTO naik 10%. Harga saham BBHI juga naik 2,14% dalam 24 jam terakhir menjadi ke level Rp1.435 pada penutupan perdagangan hari ini. Dalam sepekan terakhir, harga saham BBHI pun naik 6,3%. Sementara harga saham PT Bank Raya Indonesia Tbk. (AGRO) naik 7,45% pada penutupan perdagangan hari ini, ditutup di level Rp346. Harga saham AGRO juga naik 16,11% dalam sepekan. Bahkan harga saham PT Bank Neo Commerce Tbk. (BBYB) naik 14,62% ditutup di level Rp486. Dalam sepekan harga saham BBYB melonjak 39,66%.  Bagi ARTO, naiknya harga saham akhir-akhir ini terjadi seiring dengan hiruk pikuk kolaborasi TikTok-GOTO. Adapun, GOTO merupakan pemegang saham ARTO lewat PT Dompet Karya Anak Bangsa dengan porsi kepemilikan 21,4%. Dilansir dari Bloomberg, J.P Morgan menilai kesepakatan antara GOTO dan TikTok telah membangun optimisme signifikan untuk ARTO. Berdasarkan konsensus analis Bloomberg Rabu (13/12/2023), 11 dari 17 analis yang mengulas saham ARTO masih menyematkan rekomendasi beli. Sisanya, 4 analis hold dan 2 analis jual. Meski begitu, sepanjang tahun berjalan atau secara year to date (ytd), harga saham ARTO hingga BBHI tetap kompak di zona merah. Harga saham ARTO turun 11,29% ytd, BBHI turun 18,7% ytd, BBYB turun 24,65% ytd, dan AGRO turun 14,36% ytd. Research Analyst Infovesta Kapital Advisori Arjun Ajwani mengatakan harga saham bank digital masih turun dan masih negatif karena sejumlah faktor. "Jelas, valuasi kurang menarik sehingga sahamnya turun," katanya kepada Bisnis pada Kamis (14/12/2023). Selain itu, bank digital kalah persaingan dengan emiten bank lain terutama big caps yang memiliki fundamental serta valuasi jauh lebih menarik. "Investor lebih milih investasi ke saham perbankan besar dibandingkan bank digital," ujarnya. Senior Investment Information Mirae Asset Nafan Aji Gusta juga mengatakan bank digital masih perlu berjuang keras dalam menghadapi persaingan yang ketat. Apalagi, mengingat bank jumbo atau big caps terus mengoptimalkan digitalisasi dalam menawarkan produk hingga layanannya secara digital. “Untuk likuiditas relatif bank KBMI IV ini masih unggul, bahkan rasio kredit bermasalah nonperforming loan masih rendah jika dibanding bank digital. Apalagi bank KBMI IV itu punya mitigasi risiko yang sudah diterapkan dengan baik dan efektif,” ujarnya kepada Bisnis, bulan lalu (14/11/2023).',
    headerImg:
      "https://images.bisnis.com/posts/2023/12/14/1724057/bank_digital_ilustrasi_1_1698658109.jpg",
    author: "Fahmi Ahmad Burhan",
    source:
      "https://finansial.bisnis.com/read/20231214/90/1724057/harga-saham-bank-digital-arto-hingga-bbhi-kompak-merangkak-naik",
  },
  {
    title: "Harga Emas Hari Ini Naik Lagi, Mumpung Dolar AS Lesu",
    content:
      'Harga emas spot (XAUUSD) naik US$7,41 ke US$2.026,96 per troy ons pada perdagangan Senin (18/12/2023) kemarin, menurut data Monex Investindo Futures. Harga emas masih mendapat sentimen positif dari proyeksi pemangkasan suku bunga bank sentral Amerika Serikat (AS) atau yang dikenal dengan The Fed pada tahun depan. Seperti diketahui The Fed memproyeksikan pemangkasan suku bunga sebesar 75 basis poin. Dengan demikian kemungkinan akan ada tiga kali pemangkasan jika masing-masing dilakukan sebesar 25 basis poin. "Namun, pelaku pasar melihat The Fed bisa memangkas hingga lima kali dan yang pertama akan dilakukan pada Maret 2024. Proyeksi pemangkasan suku bunga tersebut membuat imbal hasil (yield) Treasury tenor 10 tahun saat ini tertahan di level terendah dalam hampir lima bulan terakhir, harga emas pun menjadi lebih menarik," papar Monex dalam laporan tertulis. Suku bunga yang lebih rendah mengurangi opportunity cost dari memegang emas batangan yang tidak memberikan imbal hasil (non-yielding) dan membebani dolar. Dolar AS tergelincir ke level terendah dalam empat bulan, sementara imbal hasil obligasi AS bertenor 10 tahun turun ke level terendah sejak akhir Juli. Sejumlah 17 dari 19 pejabat Fed memproyeksikan suku bunga yang lebih rendah pada akhir tahun 2024, setelah bank sentral mempertahankan suku bunga stabil untuk pertemuan ketiga berturut-turut, seperti yang diperkirakan secara luas',
    headerImg:
      "https://images.bisnis.com/posts/2023/12/19/1725151/bio-emas-7.jpg",
    author: "Hafiyyan",
    source:
      "https://market.bisnis.com/read/20231219/235/1725151/harga-emas-hari-ini-naik-lagi-mumpung-dolar-as-lesu",
  },
  {
    title: "IHSG Ditutup Melejit 7.187, Saham KAEF, IRRA & PEHA Paling Cuan",
    content:
      "Indeks Harga Saham Gabungan (IHSG) ditutup naik ke posisi 7.187 pada penutupan perdagangan hari ini, Selasa (19/12/2023). Saham KAEF, IRRA, PEHA hingga UNDG jadi saham paling cuan.  Berdasarkan data RTI Business pukul 16.00 WIB, indeks komposit parkir di level 7.187, naik 0,96% atau 68 poin. Sepanjang perdagangan indeks sempat bergerak melemah ke posisi 7.112 hingga posisi tertinggi di level 7.187 setelah dibuka di posisi 7.119 per saham. Adapun sebanyak 19,59 miliar saham beredar dengan transaksi mencapai Rp9,85 triliun dengan transaksi terjadi sebanyak 1,14 juta kali. IHSG ditopang oleh 304 saham naik, 228 saham turun dan 232 saham stagnan. Kapitalisasi pasar tercatat sebesar Rp11.579,48 triliun.  Mayoritas indeks sektoral terpantau naik. Sektor basic materials naik 1,50%, konsumer siklikal naik 0,68%, sektor energi naik 1,06%, finance naik 0,58%, sektor kesehatan melompat 1,61%, industrial naik 0,01%, infrastruktur naik 1,65%, konsumer non siklikal naik 0,77%, sektor teknologi naik 0,60% dan transportasi naik 1,63%. Sementara itu hanya sektor properti yang turun 0,22%.  Adapun saham yang berjejer di deretan top gainers adalah PT Kimia Farma Tbk. (KAEF) yang naik 24,90% ke posisi Rp1.580 per saham. Disusul saham PT Itama Ranoraya Tbk. (IRRA) naik 24,82% di posisi Rp855 per saham.",
    headerImg:
      "https://images.bisnis.com/posts/2023/12/19/1725352/26072023-bi-hil-21-ihsg-5.jpg",
    author: "Artha Adventy",
    source:
      "https://market.bisnis.com/read/20231219/7/1725352/ihsg-ditutup-melejit-7187-saham-kaef-irra-peha-paling-cuan",
  },
  {
    title:
      "Pasar Saham Indonesia Berpotensi Banjir Dana Asing pada 2024, Cek Pemicunya",
    content:
      "Pasar saham Indonesia disebut masih menarik bagi investor asing untuk berinvestasi sepanjang 2024. Beberapa faktor yang memengaruhi keputusan investor asing adalah eskalasi konflik geopolitik, keputusan suku bunga The Fed, serta valuasi IHSG yang masih lebih rendah.  Direktur Mandiri Sekuritas Oki Ramadhana mengatakan secara umum, pasar Indonesia tetap menarik di mata investor asing jika dibandingkan dengan negara emerging market lainnya. Aliran dana masuk dari investor asing sepanjang 2024 akan membaik dibandingkan dengan tahun ini.  “Asing banyak yang masih masuk ke saham BUMN. Kalau saya lihat trennya ke depan asing masih akan tetap masuk ke market kita, dan saya yakin itu akan lebih aktif lagi,” kata Oki dalam Media Gathering, Selasa (19/12/2023). Oki menambahkan sentimen positif yang mendorong investor asing masuk ke pasar saham adalah ekspektasi The Fed yang akan mulai menurunkan suku bunga tahun depan. Kondisi ini akan memberikan kepastian dan mendongkrak valuasi IHSG.  Menurut Oki, price earning (PE) IHSG saat ini berada di posisi rendah dibandingkan dengan normalnya. PE IHSG berada di level 13-13,5 kali sementara PE normal indeks adalah sebesar 15 kali. Selain itu, hal lain yang bisa mendorong minat investor asing masuk ke pasar saham Indonesia adalah potensi IPO perusahaan dengan kapitalisasi pasar jumbo pada 2024.",
    headerImg:
      "https://images.bisnis.com/posts/2023/12/19/1725334/01082023-bi-jat-26-ihsg-1.JPG",
    author: "Artha Adventy",
    source:
      "https://market.bisnis.com/read/20231219/7/1725334/pasar-saham-indonesia-berpotensi-banjir-dana-asing-pada-2024-cek-pemicunya",
  },
  {
    title: "William Tanuwijaya Kembali Jual Saham GOTO Senilai Rp70,12 Miliar",
    content:
      "Komisaris PT GoTo Gojek Tokopedia Tbk. (GOTO) William Tanuwijaya kembali melepas kepemilikan sahamnya di GOTO. Kali ini, William menjual sebanyak 764,6 juta saham Seri A GOTO miliknya.  Dalam keterbukaan informasi Bursa Efek Indonesia (BEI), William menjelaskan dirinya memiliki sebanyak 20,64 miliar saham Seri A dan Seri B, atau setara dengan 1,72% dari modal disetor dan ditempatkan oleh GOTO. Rinciannya, sebanyak 8,06 miliar saham adalah saham seri A dan 12,58 miliar saham adalah saham Seri B.`Jumlah saham yang dijual adalah 764,6 juta saham Seri A yang dimiliki secara langsung atau setara dengan 0,06% dari modal ditempatkan dan disetor GOTO,` kata William, Senin (18/12/2023).  Dia menjelaskan, harga penjualan rata-rata saham Seri A ini adalah pada harga Rp91,7155 per saham. William melakukan penjualan saham ini pada tanggal 14-18 Desember 2023'Tujuan dari transaksi ini adalah untuk pembayaran fasilitas kredit,' ujar William. Dengan harga rata-rata penjualan dan jumlah saham yang dijual tersebut, maka William diperkirakan meraup dana segar sebesar Rp70,12 miliar dari penjualan saham GOTO.",
    headerImg:
      "https://images.bisnis.com/posts/2023/12/18/1724976/tokopedia_171220.jpg",
    author: "Annisa Kurniasari Saumi",
    source:
      "https://market.bisnis.com/read/20231218/192/1724976/william-tanuwijaya-kembali-jual-saham-goto-senilai-rp7012-miliar",
  },
  {
    title: "Bank Sentral Makin Dovish, Prospek Pasar Saham Kian Naik?",
    content:
      "Direktur Investasi PT Kisi Asset Management, Arfan F. Karniody optimistis terhadap pemulihan pasar keuangan RI di 2024 seiring dengan kuatnya prospek percepatan pemangkasan suku bunga The Fed di Kuartal awal 2024.    Arfan menyebutkan Sinyal dovish The Fed melebihi ekspektasi pasar sehingga peluang bursa saham akan lebih baik di 2024. Sementara terkait Bank Indonesia, kebijakannya akan sangat tergantung dari perkembangan pasar global dan kondisi inflasi serta pergerakan nilai tukar Rupiah. Seperti apa pelaku pasar melihat arah kebijakan bank sentral? Selengkapnya simak dialog Anneke Wijaya dengan Direktur Investasi PT Kisi Asset Management, Arfan F. Karniody dalam Power Lunch,CNBCIndonesia (Selasa 19/12/2023)",
    headerImg:
      "https://akcdn.detik.net.id/visual/2022/04/26/ilustrasi-pasar-saham_169.jpeg?w=715&q=90",
    author: "MY MONEY",
    source:
      "https://www.cnbcindonesia.com/mymoney/20231219142000-74-498564/bank-sentral-makin-dovish-prospek-pasar-saham-kian-baik",
  },
];

module.exports = seedNews;
