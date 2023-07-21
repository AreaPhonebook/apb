const cardData = [
    {
        id: 1,
        name: "অফিস অফ দি কন্ট্রোলার জেনারেল অফ একাউন্টস",
        link: "http://www.cga.gov.bd/",
    },
    {
        id: 2,
        name: "অফিস অব দি রেজিস্ট্রার অব জয়েন্ট স্টক কোম্পানিজ এন্ড ফার্মস",
        link: "http://www.roc.gov.bd/",
    },
    {
        id: 3,
        name: "অ্যাটর্নি জেনারেল অফিস",
        link: "http://attorneygeneral.gov.bd/",
    },
    {
        id: 4,
        name: "আইন কমিশন-বাংলাদেশ",
        link: "http://www.lawcommissionbangladesh.org/",
    },
    {
        id: 5,
        name: "আন্তর্জাতিক উদরাময় রোগ গবেষণা কেন্দ্র, বাংলাদেশ",
        link: "https://www.icddrb.org/",
    },
    {
        id: 6,
        name: "আন্তর্জাতিক মাতৃভাষা ইনস্টিটিউট",
        link: "http://imli.gov.bd/",
    },
    {
        id: 7,
        name: "আমদানি ও রপ্তানি নিয়ন্ত্রণ অধিদপ্তর",
        link: "http://www.ccie.gov.bd/index.php?cmd=about_ccie&id=13",
    },
    {
        id: 8,
        name: "আমেরিকান ইনস্টিটিউট অব বাংলাদেশ স্টাডিজ",
        link: "https://aibs.net/",
    },
    {
        id: 9,
        name: "আর্কাইভস ও গ্রন্থাগার অধিদপ্তর",
        link: "http://www.nanl.gov.bd/",
    },
    {
        id: 10,
        name: "ইনভেস্টমেন্ট কর্পোরেশন অব বাংলাদেশ",
        link: "http://www.icb.gov.bd/zindex.php",
    },
    {
        id: 11,
        name: "ইনস্টিটিউট অব ওয়াটার মডেলিং",
        link: "https://www.iwmbd.org/",
    },
    {
        id: 12,
        name: "ইনস্টিটিউট অব কস্ট এন্ড ম্যানেজমেন্ট একাউন্ট্যান্টস",
        link: "https://www.icmab.org.bd/",
    },
    {
        id: 13,
        name: "ইনস্টিটিউট অব চার্টার্ড একাউন্ট্যান্টস অব বাংলাদেশ",
        link: "https://www.icab.org.bd/",
    },
    {
        id: 14,
        name: "ইন্টিগ্রেটেড এগ্রিকালচারাল প্রোডাক্টিভিটি প্রজেক্ট",
        link: "http://www.iapp.gov.bd/",
    },
    {
        id: 15,
        name: "ইলেক্ট্রিসিটি জেনারেশন কোম্পানি লি.",
        link: "http://www.egcb.com.bd/",
    },
    {
        id: 16,
        name: "উচ্চশিক্ষা মানোন্নয়ন প্রকল্প",
        link: "http://heqep-ugc.gov.bd/",
    },
    {
        id: 17,
        name: "উপানুষ্ঠানিক শিক্ষা ব্যুরো",
        link: "http://www.bnfe.gov.bd/",
    },
    {
        id: 18,
        name: "এনজিও বিষয়ক ব্যুরো",
        link: "http://www.ngoab.gov.bd/",
    },
    {
        id: 19,
        name: "ওয়াকফ প্রশাসক",
        link: "http://www.waqf.gov.bd/",
    },
    {
        id: 20,
        name: "ওয়েজ আর্নার্স কল্যাণ বোর্ড",
        link: "http://www.wewb.gov.bd/",
    },
    {
        id: 21,
        name: "ঔষধ প্রশাসন অধিদপ্তর",
        link: "http://www.dgda.gov.bd/",
    },
    {
        id: 22,
        name: "কন্ট্রোলার অব সার্টিফাইং অথরিটিজ",
        link: "http://www.cca.gov.bd/",
    },
    {
        id: 23,
        name: "কন্ট্রোলার জেনারেল ডিফেন্স ফাইন্যান্স",
        link: "http://www.cca.gov.bd/",
    },
    {
        id: 24,
        name: "কারখানা ও স্থাপনা পরিদর্শক",
        link: "http://dife.gov.bd/index.php/en/",
    },
    {
        id: 25,
        name: "কারা অধিদপ্তর",
        link: "http://www.prison.gov.bd/",
    },
    {
        id: 26,
        name: "কারিগরী শিক্ষা অধিদপ্তর",
        link: "http://www.techedu.gov.bd/",
    },
    {
        id: 27,
        name: "কৃষি তথ্য সার্ভিস (এআইএস)",
        link: "http://www.ais.gov.bd/",
    },
    {
        id: 28,
        name: "কৃষি বিপণন অধিদপ্তর",
        link: "http://www.dam.gov.bd/",
    },
    {
        id: 29,
        name: "কৃষি সম্প্রসারণ অধিদপ্তর",
        link: "http://www.dae.gov.bd/",
    },
    {
        id: 30,
        name: "কেন্দ্রীয় ক্রয় কারিগরি ইউনিট",
        link: "https://cptu.gov.bd/",
    },
    {
        id: 31,
        name: "ক্রীড়া পরিদপ্তর",
        link: "http://www.ds.gov.bd/",
    },
    {
        id: 32,
        name: "ক্ষুদ্র কৃষক উন্নয়ন ফাউন্ডেশন (এসএফডিএফ)",
        link: "http://www.sfdf.org.bd/",
    },
    {
        id: 33,
        name: "খনিজ সম্পদ উন্নয়ন ব্যুরো",
        link: "http://bomd.gov.bd/",
    },
    {
        id: 34,
        name: "খাদ্য অধিদপ্তর",
        link: "http://www.dgfood.gov.bd/",
    },
    {
        id: 35,
        name: "খ্রিস্টান ধর্মীয় কল্যাণ ট্রাস্ট",
        link: "http://www.mora.gov.bd/component/content/category/16-christian-welfare-trust.html?layout=blog",
    },
    {
        id: 36,
        name: "গণগ্রন্থাগার অধিদপ্তর",
        link: "http://www.publiclibrary.gov.bd/",
    },
    {
        id: 37,
        name: "গণপূর্ত অধিদপ্তর",
        link: "http://www.pwd.gov.bd/",
    },
    {
        id: 38,
        name: "গণযোগাযোগ অধিদপ্তর",
        link: "http://www.masscommunication.gov.bd/",
    },
    {
        id: 39,
        name: "গভর্ন্যান্স ইনোভেশন ইউনিট",
        link: "http://giu.portal.gov.bd/",
    },
    {
        id: 40,
        name: "ঘূর্ণিঝড় প্রস্তুতি কর্মসূচি (সিপিপি)",
        link: "http://www.cpp.gov.bd/",
    },
    {
        id: 41,
        name: "চট্টগ্রাম স্টক এক্সচেঞ্জ",
        link: "https://www.cse.com.bd/",
    },
    {
        id: 42,
        name: "চাইল্ড লেবার ইউনিট",
        link: "http://www.clu-mole.gov.bd/",
    },
    {
        id: 43,
        name: "জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো",
        link: "http://www.bmet.org.bd/",
    },
    {
        id: 44,
        name: "জনস্বাস্থ্য প্রকৌশল অধিদপ্তর",
        link: "http://www.dphe.gov.bd/",
    },
    {
        id: 45,
        name: "জাতিসংঘের বাংলাদেশ স্থায়ী মিশন",
        link: "www.un.int/bangladesh/",
    },
    {
        id: 46,
        name: "জাতীয় আইনগত সহায়তা প্রদান সংস্থা",
        link: "http://www.nlaso.gov.bd/",
    },
    {
        id: 47,
        name: "জাতীয় ই-গভর্নমেন্ট প্রকিউরমেন্ট",
        link: "https://www.eprocure.gov.bd/",
    },
    {
        id: 48,
        name: "জাতীয় কম্পিউটার প্রশিক্ষণ ও গবেষণা একাডেমি",
        link: "http://www.nactar.gov.bd/",
    },
    {
        id: 49,
        name: "জাতীয় ক্রীড়া পরিষদ",
        link: "http://www.nsc.gov.bd/",
    },
    {
        id: 50,
        name: "জাতীয় গণমাধ্যম ইনস্টিটিউট",
        link: "http://www.nimc.gov.bd/",
    },
    {
        id: 51,
        name: "জাতীয় গৃহায়ন কর্তৃপক্ষ",
        link: "http://www.nha.gov.bd/",
    },
    {
        id: 52,
        name: "জাতীয় জনসংখ্যা গবেষণা ও প্রশিক্ষণ ইনস্টিটিউট (নিপোর্ট)",
        link: "http://www.niport.gov.bd/",
    },
    {
        id: 53,
        name: "জাতীয় পরিকল্পনা ও উন্নয়ন একাডেমি (এনএপিডি)",
        link: "http://www.napd.gov.bd/",
    },
    {
        id: 54,
        name: "জাতীয় পাঠ্যক্রম ও পাঠ্যপুস্তক বোর্ড",
        link: "http://www.nctb.gov.bd/",
    },
    {
        id: 55,
        name: "জাতীয় প্রতিবন্ধী উন্নয়ন ফাউন্ডেশন",
        link: "http://www.nfddp.gov.bd/",
    },
    {
        id: 56,
        name: "জাতীয় প্রতিরক্ষা কলেজ",
        link: "https://www.ndc.gov.bd/",
    },
    {
        id: 57,
        name: "জাতীয় প্রাথমিক শিক্ষা একাডেমি",
        link: "http://www.nape.gov.bd/",
    },
    {
        id: 58,
        name: "জাতীয় বিজ্ঞান ও প্রযুক্তি জাদুঘর",
        link: "http://www.nmst.gov.bd/",
    },
    {
        id: 59,
        name: "জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর",
        link: "http://dncrp.portal.gov.bd/",
    },
    {
        id: 60,
        name: "জাতীয় মহিলা সংস্থা",
        link: "http://www.jms.gov.bd/bn/",
    },
    {
        id: 61,
        name: "জাতীয় মানবাধিকার কমিশন বাংলাদেশ",
        link: "http://www.nhrc.org.bd/",
    },
    {
        id: 62,
        name: "জাতীয় মুক্তিযোদ্ধা কল্যাণ ট্রাস্ট",
        link: "http://www.bffwt.gov.bd/",
    },
    {
        id: 63,
        name: "জাতীয় মুক্তিযোদ্ধা পরিষদ",
        link: "http://www.molwa.gov.bd/",
    },
    {
        id: 64,
        name: "জাতীয় রাজস্ব বোর্ড",
        link: "http://www.nbr-bd.org/",
    },
    {
        id: 65,
        name: "জাতীয় শিক্ষা ব্যবস্থাপনা একাডেমি",
        link: "http://www.naem.gov.bd/",
    },
    {
        id: 66,
        name: "জাতীয় সঞ্চয় অধিদপ্তর",
        link: "http://www.nationalsavings.gov.bd/",
    },
    {
        id: 67,
        name: "জাতীয় স্থানীয় সরকার ইনস্টিটিউট",
        link: "http://www.nilg.gov.bd/",
    },
    {
        id: 68,
        name: "জীবন বীমা কর্পোরেশন",
        link: "http://www.jbc.gov.bd/",
    },
    {
        id: 69,
        name: "টেলিটক বাংলাদেশ",
        link: "https://www.teletalk.com.bd/bn/",
    },
    {
        id: 70,
        name: "টেলিফোন শিল্প সংস্থা লিঃ",
        link: "https://www.tss.com.bd/",
    },
    {
        id: 71,
        name: "ট্রেডিং কর্পোরেশন অব বাংলাদেশ (টিসিবি)",
        link: "http://www.tcb.gov.bd/",
    },
    {
        id: 72,
        name: "ঢাকা ওয়াসা",
        link: "http://www.dwasa.org.bd/",
    },
    {
        id: 73,
        name: "ঢাকা কাস্টম হাউস",
        link: "https://www.dch.gov.bd/",
    },
    {
        id: 74,
        name: "ঢাকা পরিবহন সমন্বয় কর্তৃপক্ষ",
        link: "http://www.dtcb.gov.bd/",
    },
    {
        id: 75,
        name: "ঢাকা বিদ্যুৎ বিতরণ কোম্পানি",
        link: "https://www.desco.org.bd/bangla/",
    },
    {
        id: 76,
        name: "ঢাকা পাওয়ার ডিস্ট্রিবিউশন কোম্পানি লিমিটেড",
        link: "https://dpdc.gov.bd/",
    },
    {
        id: 77,
        name: "ঢাকা মেট্রোপলিটন পুলিশ",
        link: "https://dmp.gov.bd/",
    },
    {
        id: 78,
        name: "ঢাকা স্টক এক্সচেঞ্জ",
        link: "https://www.dsebd.org/",
    },
    {
        id: 79,
        name: "তথ্য অধিদপ্তর (পিআইডি)",
        link: "http://www.pressinform.gov.bd/",
    },
    {
        id: 80,
        name: "তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর",
        link: "http://www.doict.gov.bd/",
    },
    {
        id: 81,
        name: "তথ্য কমিশন",
        link: "http://www.infocom.gov.bd/",
    },
    {
        id: 82,
        name: "তিতাস গ্যাস ট্রান্সমিশন এন্ড ডিস্ট্রিবিউশন কোম্পানি",
        link: "https://www.titasgas.org.bd/Pages/Home/1/",
    },
    {
        id: 83,
        name: "তুলা উন্নয়ন বোর্ড",
        link: "http://cdb.gov.bd/",
    },
    {
        id: 84,
        name: "দুর্যোগ ব্যবস্থাপনা অধিদপ্তর",
        link: "http://www.ddm.gov.bd/",
    },
    {
        id: 85,
        name: "দ্য সিকিউরিটি প্রিন্টিং কর্পোরেশন (বাংলাদেশ) লিঃ",
        link: "http://www.spcbl.org.bd/",
    },
    {
        id: 86,
        name: "নগর উন্নয়ন অধিদপ্তর",
        link: "http://www.udd.gov.bd/",
    },
    {
        id: 87,
        name: "নদী গবেষণা ইনস্টিটিউট",
        link: "http://www.rri.gov.bd/",
    },
    {
        id: 88,
        name: "নিবন্ধন পরিদপ্তর",
        link: "http://www.rd.gov.bd/",
    },
    {
        id: 89,
        name: "নিম্নতম মজুরি বোর্ড",
        link: "http://mwb.gov.bd/",
    },
    {
        id: 90,
        name: "ন্যাশনাল ইনস্টিটিউট অব বায়োটেকনোলজি",
        link: "http://www.nib.gov.bd/",
    },
  ];
  