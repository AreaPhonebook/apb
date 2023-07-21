const userData = [
  {
    id: 1,
    photo: "cdn/doctor-sat-down/new-doctors-diagnostic-lab-and-consultant-service.jpg",
    name: "নিউ ডক্টরস ডায়াগনস্টিক ল্যাব এন্ড কনসালট্যান্ট সার্ভিস",
    number: "01772200965",
    wordNo: "৬",
    location: "হাজী নুর ইসলাম সুপার মার্কেট, ২য় তলা, পাগলা",
    detail: "বিভিন্ন রোগের ডাক্তার বসে উল্লেখিত নাম্বারে যোগাযোগ করুন।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 2,
    photo: "cdn/doctor-sat-down/rima-dental-care.jpg",
    name: "রীমা ডেন্টাল কেয়ার",
    number: "01748585601",
    wordNo: "৬",
    location: "হাজী ফজলুল হক মার্কেট, ভাঙ্গাপুল, রসুলপুর",
    detail: "দাঁতের ডাক্তার বসে।<br>রবিবার ও বুধবার।<br>বিকাল ৫টা থেকে রাত ১০টা পর্যন্ত (আগে যোগাযোগ করবেন)।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 3,
    photo: "cdn/doctor-sat-down/doctor-sat-down.png",
    name: "আল-ইহসান ফার্মা",
    number: "01672664134",
    wordNo: "৫",
    location: "কুমিল্লা সমিতির মার্কেট, শাহী-বাজার",
    detail: "সকল প্রকারের ঔষধ পাওয়া যায়। <br><br>ডাঃ মোঃ আবদুন নূর সায়েম <br>এম.বি.বি.এস, বি.সি.এস (স্ব্যাস্থ) <br> রোগী দেখার সময়ঃ বিকাল ৫.৩০ মিঃ হইতে রাত ৯.০০টা। <br>শনি, সোম ও বুধবার পর্যন্ত। <br><br> মোঃ খোরশেদ আমল ভুইয়া<br> চক্ষু,  মাথা ব্যাথা ও লো ভিশন স্পেশালিষ্ট।<br> বিকাল ৪টা থেকে সন্ধ্যা৬ টা। <br><br> ডাঃ মোঃ কামরুল হাসান<br> শিশু ও ফ্যামিলি মেডিসিন<br> প্রতি মঙ্গলবার বিকাল ৩টা থেকে ৫টা পর্যন্ত। <br><br> ডাঃ মোঃ আরশাদ<br> ওরাল এন্ড ডেন্টাল সার্জন<br> প্রতি রবি ও বুধবার  বিকাল ৫ টা থেকে রাত ৯ টা পর্যন্ত।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 4,
    photo: "cdn/doctor-sat-down/doctor-sat-down.png",
    name: "শহিদুল মেডিকেল হল",
    number: "01916382877",
    wordNo: "৫",
    location: "ভাবির বাজার",
    detail: "ডাঃ কাজী আশ্ররাফ (মাতুইল)<br> ডাক্তার বসেনঃ সন্ধা ৭ টা থেকে ৯ টা পর্যন্ত।<br> শনিবার, সোমবার, বুধবার।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 5,
    photo: "cdn/doctor-sat-down/care-medicine-corner.jpg",
    name: "কেয়ার মেডিসিন কর্নার",
    number: "01630243900",
    wordNo: "৬",
    location: "নয়ামাটি জামে মসজিদ সংলগ্ন, নয়ামাটি",
    detail: "শুধু দাতের ডাক্তার বসে,<br>ডাক্তার বসেনঃ ৬টা - ১০টা পর্যন্ত।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 6,
    photo: "cdn/doctor-sat-down/dr-mujibur-rahman.jpg",
    name: "ডাঃ মুজিবুর রহমান",
    number: "01819271396",
    wordNo: "৬",
    location: "এ এস এম সুপার মার্কেট, পাগলা",
    detail: "মেডিসিন বিশেষজ্ঞ)<br> ডাক্তার বসেনঃ বিকাল ৪ টা থেকে রাত ৯.৩০ টা পর্যন্ত।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 7,
    photo: "cdn/doctor-sat-down/himel-dental-care.jpg",
    name: "হিমেল ডেন্টাল কেয়ার",
    number: "01687014219",
    wordNo: "৬",
    location: "এ এস এম সুপার মার্কেট, পাগলা",
    detail: "দাঁতের ডাক্তার বসে,<br> ডাক্তার বসেনঃ দুপুর ৩ টা থেকে ৯টা পর্যন্ত।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 8,
    photo: "cdn/doctor-sat-down/doctor-sat-down.png",
    name: "জনসেবা ফার্মেসি",
    number: "01917566006",
    wordNo: "৫",
    location: "আমতলা মোড়",
    detail: "চোখের ডাক্তার বসে - প্রতি মঙ্গলবার ১০ টা থেকে ৩ টা।<br>দাতের ডাক্তার বসে - প্রতি বৃহস্পতিবার ৩ টা থেকে ৬ টা।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 9,
    photo: "cdn/doctor-sat-down/doctors-dental-surgery.jpg",
    name: "ডক্টরস ডেন্টাল সার্জারী",
    number: "01779881842",
    wordNo: "৪",
    location: "দেলপাড়া বাজার, দেলপাড়া",
    detail: "দাঁতের ডাক্তার বসে।<br> ডাক্তার বসেনঃ প্রতিদিন বিকাল ৫টা থেকে রাত ১০টা পর্যন্ত।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 10,
    photo: "cdn/doctor-sat-down/dewar-pharmacy.jpg",
    name: "দেওয়ার ফার্মেসি",
    number: "01911798538",
    wordNo: "৪",
    location: "ইকরা স্কুল সংলগ্ন, কুসুমবাগ",
    detail: "ডাক্তার বসে, শিশু, গাইনি, নাক-কান গলা ও মেডিসিন বিশেষজ্ঞ।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 11,
    photo: "cdn/doctor-sat-down/janaseba-pharmacy.jpg",
    name: "জনসেবা ফার্মেসী",
    number: "01902322132",
    wordNo: "৪",
    location: "নুরবাগ জামে মসজিদ সংলগ্ন, নুরবাগ",
    detail: "ডাক্তার বসে, মেডিসিন বিশেষজ্ঞ।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 12,
    photo: "cdn/doctor-sat-down/ibn-sina-medicine-corner.jpg",
    name: "ইবনে সিনা মেডিসিন কর্নার",
    number: "01916204618",
    wordNo: "৪",
    location: "নুরবাগ জামে মসজিদ সংলগ্ন, নুরবাগ",
    detail: "ডাক্তার বসে চোখের, মেডিসিন বিশেষজ্ঞ ও চক্ষু।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 13,
    photo: "cdn/doctor-sat-down/doctor-sat-down.png",
    name: "রাজু মেডিকেল হল এন্ড ডেন্টাল সার্জারী",
    number: "01750044133",
    wordNo: "৬",
    location: "দক্ষিন নয়ামাটি",
    detail: "বিশেষজ্ঞ ডাক্তারের চেম্বার।",
    postLink: "https://www.facebook.com/AreaPhonebook/",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  }
];
