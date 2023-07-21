const categoryData = [  
  
    {
      id: 1,
      photo: "cdn/universities/university-grants-commission-of-bangladesh.png",
      name: "পাবলিক বিশ্ববিদ্যালয়",
      pageLink: "#",
      subCategory:
        [        
          {
            name: "ঢাকা বিশ্ববিদ্যালয়",
            link: "https://www.du.ac.bd/"
          },
          {
            name: "জগন্নাথ বিশ্ববিদ্যালয়",
            link: "https://www.jnu.ac.bd/"
          },
          {
            name: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
            link: "https://www.juniv.edu"
          },
          {
            name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
            link: "https://www.bau.edu.bd/"
          },
          {
            name: "বাংলাদেশ প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.buet.ac.bd/"
          },
          {
            name: "চট্টগ্রাম বিশ্ববিদ্যালয়",
            link: "https://www.cu.ac.bd/"
          },          
          {
            name: "রাজশাহী বিশ্ববিদ্যালয়",
            link: "https://www.ru.ac.bd/"
          },
          {
            name: "ইসলামী বিশ্ববিদ্যালয়, বাংলাদেশ",
            link: "https://www.iu.ac.bd/"
          },
          {
            name: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.sust.edu/"
          },
          {
            name: "খুলনা বিশ্ববিদ্যালয়",
            link: "https://www.ku.ac.bd/"
          },
          {
            name: "বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয়",
            link: "https://www.bou.ac.bd/"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়",
            link: "https://www.bsmmu.edu.bd/"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান কৃষি বিশ্ববিদ্যালয়",
            link: "https://www.bsmrau.edu.bd/"
          },
          {
            name: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.hstu.ac.bd/"
          },
          {
            name: "মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.mbstu.ac.bd/"
          },
          {
            name: "পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.pstu.ac.bd/"
          },
          {
            name: "শেরেবাংলা কৃষি বিশ্ববিদ্যালয়",
            link: "https://www.sau.edu.bd/"
          },
          {
            name: "চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.cuet.ac.bd/"
          },
          {
            name: "রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.ruet.ac.bd/"
          },
          {
            name: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.kuet.ac.bd/"
          },
          {
            name: "ঢাকা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.duet.ac.bd/"
          },
          {
            name: "নোয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.nstu.edu.bd/"
          },
          {
            name: "কুমিল্লা বিশ্ববিদ্যালয়",
            link: "https://www.cou.ac.bd/"
          },
          {
            name: "জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়",
            link: "https://www.jkkniu.edu.bd/"
          },
          {
            name: "চট্টগ্রাম ভেটেরিনারি ও এনিম্যাল সায়েন্সেস বিশ্ববিদ্যালয়",
            link: "https://www.cvasu.ac.bd/"
          },
          {
            name: "সিলেট কৃষি বিশ্ববিদ্যালয়",
            link: "https://www.sau.ac.bd/"
          },
          {
            name: "যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.just.edu.bd/"
          },
          {
            name: "পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.pust.ac.bd/"
          },
          {
            name: "বেগম রোকেয়া বিশ্ববিদ্যালয়, রংপুর",
            link: "https://www.brur.ac.bd/"
          },
          {
            name: "বাংলাদেশ ইউনিভার্সিটি অফ প্রফেশনালস",
            link: "https://www.bup.edu.bd/"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.bsmrstu.edu.bd/"
          },
          {
            name: "বাংলাদেশ ইউনিভার্সিটি অব টেক্সটাইল",
            link: "https://www.butex.edu.bd/"
          },
          {
            name: "বরিশাল বিশ্ববিদ্যালয়",
            link: "https://www.bu.ac.bd/"
          },
          {
            name: "রাঙামাটি বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://www.rmstu.edu.bd/"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান মেরিটাইম ইউনিভার্সিটি, বাংলাদেশ",
            link: "https://www.bsmrmu.edu.bd/"
          },
          {
            name: "ইসলামী আরবি বিশ্ববিদ্যালয়",
            link: "https://www.iau.edu.bd/"
          },
          {
            name: "চট্টগ্রাম মেডিকেল বিশ্ববিদ্যালয়",
            link: "https://www.cmu.edu.bd/"
          },
          {
            name: "রাজশাহী মেডিকেল বিশ্ববিদ্যালয়",
            link: "https://www.rmu.edu.bd/"
          },
          {
            name: "রবীন্দ্র বিশ্ববিদ্যালয়, বাংলাদেশ",
            link: "https://www.rub.ac.bd/"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল বিশ্ববিদ্যালয়, বাংলাদেশ",
            link: "https://www.bdu.ac.bd/"
          },
          {
            name: "শেখ হাসিনা বিশ্ববিদ্যালয়",
            link: "https://shubd.net/"
          },
          {
            name: "খুলনা কৃষি বিশ্ববিদ্যালয়",
            link: "https://www.kau.edu.bd/"
          },
          {
            name: "বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://bsfmstu.ac.bd/"
          },
          {
            name: "সিলেট মেডিকেল বিশ্ববিদ্যালয়",
            link: "https://smu.edu.bd/"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান এভিয়েশন অ্যান্ড অ্যারোস্পেস ইউনিভার্সিটি (BSMRAU)",
            link: "https://www.bsmraau.edu.bd/"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিশ্ববিদ্যালয়, কিশোরগঞ্জ",
            link: "http://bsmru.ac.bd/"
          },
          {
            name: "হবিগঞ্জ কৃষি বিশ্ববিদ্যালয়",
            link: "https://www.hau.ac.bd/"
          },
          {
            name: "চাঁদপুর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "https://cstu.ac.bd/"
          }
        ]
    },  
    {
      id: 2,
      photo: "cdn/universities/university-grants-commission-of-bangladesh.png",
      name: "প্রাইভেট বিশ্ববিদ্যালয়",
      pageLink: "#",
      subCategory:
        [
          {
            name: "নর্থ সাউথ ইউনিভার্সিটি",
            link: "www.northsouth.edu"
          },
          {
            name: "বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় চট্টগ্রাম",
            link: "www.ustc.edu.bd"
          },
          {
            name: "ইন্ডিপেনডেন্ট ইউনিভার্সিটি, বাংলাদেশ",
            link: "www.iub.edu.bd"
          },
          {
            name: "সেন্ট্রাল উইমেন্স ইউনিভার্সিটি",
            link: "www.cwu.edu.bd"
          },
          {
            name: "ইন্টারন্যাশনাল ইউনিভার্সিটি অফ বিজনেস এগ্রিকালচার অ্যান্ড টেকনোলজি",
            link: "www.iubat.edu"
          },
          {
            name: "আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় চট্টগ্রাম",
            link: "www.iiuc.ac.bd"
          },
          {
            name: "আহসানউল্লাহ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.aust.edu"
          },
          {
            name: "আমেরিকান ইন্টারন্যাশনাল ইউনিভার্সিটি-বাংলাদেশ",
            link: "www.aiub.edu"
          },
          {
            name: "ইস্ট ওয়েস্ট ইউনিভার্সিটি",
            link: "www.ewubd.edu"
          },
          {
            name: "ইউনিভার্সিটি অব এশিয়া প্যাসিফিক",
            link: "www.uap-bd.edu"
          },
          {
            name: "গণ বিশ্ববিদ্যালয়",
            link: "www.gonouniversity.edu.bd"
          },
          {
            name: "দ্য পিপলস ইউনিভার্সিটি অব বাংলাদেশ",
            link: "www.pub.ac.bd"
          },
          {
            name: "এশিয়ান ইউনিভার্সিটি অব বাংলাদেশ",
            link: "www.aub.edu.bd"
          },
          {
            name: "ঢাকা ইন্টারন্যাশনাল ইউনিভার্সিটি",
            link: "www.diu.ac"
          },
          {
            name: "মানারাত ইন্টারন্যাশনাল ইউনিভার্সিটি",
            link: "www.manarat.ac.bd"
          },
          {
            name: "ব্র্যাক বিশ্ববিদ্যালয়",
            link: "www.bracu.ac.bd"
          },
          {
            name: "বাংলাদেশ ইউনিভার্সিটি",
            link: "www.bu.edu.bd"
          },
          {
            name: "লিডিং বিশ্ববিদ্যালয়",
            link: "www.lus.ac.bd"
          },
          {
            name: "বিজিসি ট্রাস্ট ইউনিভার্সিটি বাংলাদেশ",
            link: "www.bgctub.ac.bd"
          },
          {
            name: "সিলেট ইন্টারন্যাশনাল ইউনিভার্সিটি",
            link: "www.siu.edu.bd"
          }
        ]
    },
    {
      id: 3,
      photo: "cdn/universities/university-grants-commission-of-bangladesh.png",
      name: "ন্যাশনাল বিশ্ববিদ্যালয়",
      pageLink: "#",
      subCategory:
        [
          {
            name: "ইসলামিক ইউনিভার্সিটি অব টেকনোলজি, গাজীপুর",
            link: "www.iutoic-dhaka.edu"
          },
          {
            name: "এশিয়ান ইউনিভার্সিটি ফর উইমেন",
            link: "www.auw.edu.bd"
          },
          {
            name: "সাউথ এশিয়ান ইউনিভার্সিটি",
            link: "www.southasianuniversity.org"
          }
        ]
    }
  ];
    
  