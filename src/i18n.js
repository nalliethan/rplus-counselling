import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 翻译资源
const resources = {
  en: {
    translation: {
      "nav_home":"Home",
      "nav_aboutR":"About R+",
      "nav_services":"Services",
      "nav_practitioner":"About the Practitioner",
      "nav_session":"Session Mode",
      "hero_title":"Counselling",
      "hero_subtitle": "Professional Counselling for Adolescents & Adults",
      "hero_online": "Online Session (Available Now)",
      "hero_offline": "Seremban 2 (Coming Soon)",
      "hero_book_now": "Book Now",
      "about_title": "R+ Counselling",
      "about_paragraph": "<bold>{{title}}</bold> provides a <highlight1>safe</highlight1>, <highlight1>confidential</highlight1>, and <highlight1>professional</highlight1> environment for adolescents and adults to explore emotional concerns, navigate life challenges, and develop healthier ways of coping through <highlight2>evidence-informed</highlight2> counselling support.",
      "about_paragraph_2": "The “+” represents the potential for growth, change, and new possibilities over time.",
      "services_title": "Services",
      "services_subtitle": "Counselling services are available for adolescents and adults, focusing on emotional wellbeing, personal challenges, and life transitions.",
      "services":{ 
        "list": [
          {
            id: 1,
            title: "Adolescent Counselling (Teens)",
            desc: ["Provides a safe, confidential and non-judgmental space for adolescents to explore their emotional experiences and navigate challenges related to academic stress, relationships, family communication, identity development and future direction."]
          },
          {
            id: 2,
            title: "Parent Consultation",
            desc: ["Supports parents in understanding their child’s or adolescent’s emotional needs, behaviours and communication patterns, while exploring practical and developmentally appropriate ways to provide support."]
          },

          {
            id: 3,
            title: "Individual Counselling (Adult)",
            desc: ["Provides a safe, confidential and non-judgmental space for adults to explore emotional concerns, navigate life challenges and move towards a more meaningful and values-aligned life at their own pace."]
          },
          // {
          //   title: "Career Counselling",
          //   desc: ["Support for individuals exploring career direction, study pathways, decision-making, and transitions in education or work."]
          // },
          {
            id: 4,
            title: "Wellbeing Talks and Workshop (Upon Request)",
            desc: ["Talks, workshops and training programmes can be tailored to the needs of schools, organisations, workplaces and community groups."]
          }
        ]
      },
      "services_support_title": "Areas of Support",
      "services_support": [
        'Emotional and psychological wellbeing support',
        'Personal growth and self-understanding',
        'Relationship and interpersonal concerns',
        'Family dynamics and parenting support',
        'Life transitions and decision-making support'
      ],
      "practitioner_title": "About the Practitioner",
      "practitioner_data": [
        'Licensed and Registered Counsellor (Lembaga Kaunselor Malaysia)',
        'Certified Counselling Supervisor (Lembaga Kaunselor Malaysia)',
        'M. Ed (Guidance and Counselling)'
      ],
      "practitioner_para1":"Rachael is a registered counsellor and certified counselling supervisor providing counselling services for adolescents and adults.",
      "practitioner_para2":"She has extensive experience working within school settings, where she has supported adolescents, parents, and educators in navigating emotional challenges, relationship difficulties, developmental transitions, and life stressors. She has also been involved in school-based counselling leadership and wellbeing initiatives, supporting both individual and community-level mental health needs.",
      "practitioner_para3":"She works from a stance of curiosity, empathy and collaboration, offering a safe and non-judgmental space for individuals to explore their inner experiences and move towards meaningful change at their own pace.",
      "practitioner_more":"Read More",
      "session_title":"Session Mode",
      "session_online":"Online Session (Available now)",
      "session_location":"Seremban 2 (In-person sessions coming soon)",
      "session_hours":"Consultation Hours",
      "session_operation_hours1": "Monday - Friday: 9:30am - 5:00pm",
      "session_operation_hours2": "Saturday: 9:30am - 12:30pm",
      "session_hours_info":"Appointment times outside the stated hours may be available upon request, subject to availability.",
      "book_title":"Book A Session",
      "book_subtitle":"You are welcome to reach out via WhatsApp to enquire or arrange a session when you feel ready.",
      "book_btn":"Reach Out via WhatsApp",
      "book_note":"Important Note:",
      "book_note_lists": [
        "Messages will typically be attended to within 24 - 48 hours during working days.",
        "R+ Counselling does not provide immediate crisis intervention. If you are experiencing a psychological emergency, please contact the following 24-hour helplines or visit the nearest hospital emergency department:"
      ],
      "book_hotlines": [
        "Befrienders: 03-7627 2929",
        "Talian Kasih: 15999",
        "HEAL Line: 15555 (MOH Mental Health Support)",
      ],
      "book_pre_fill": "Hi. I would like to book a counselling session.",
      "footer_explore":"Explore",
      "footer_session":"Sessions",
    }
  },
  zh: {
    translation: {
      "nav_home":"主页",
      "nav_aboutR":"关于 R+",
      "nav_services":"服务项目",
      "nav_practitioner":"关于心理辅导与咨询师",
      "nav_session":"辅导与咨询形式",
      "hero_title":"心理辅导与成长",
      "hero_subtitle": "青少年与成人的专业心理辅导与咨询",
      "hero_online": "线上 (现已开放)",
      "hero_offline": "芙蓉新城 S2 (筹备中)",
      "hero_book_now": "欢迎联系",
      "about_title": "R+心理咨询与咨询",
      "about_paragraph": "<bold>{{title}}</bold>提供一个<highlight1>安全</highlight1>、<highlight1>保密</highlight1>且<highlight1>专业</highlight1>的环境, 让青少年与成人能够探索情绪困扰、应对生活挑战，并在<highlight2>循证</highlight2>心理咨询的支持下发展更健康的应对方式。",
      "about_paragraph_2": "“+”代表成长、改变与更多可能性的延展空间。",
      "services_title": "服务项目",
      "services_subtitle": "心理咨询服务面向青少年与成人，关注情绪健康、个人困扰及人生转变阶段的支持。",
      "services":{ 
        "list": [
          {
            id:1,
            title: "青少年心理咨询",
            desc: ["为青少年提供一个安全、保密且不带评判的空间，协助他们探索情绪经验，并应对成长过程中所面对的挑战，例如学业压力、人际关系、家庭沟通、自我认同及人生方向探索等。"]
          },
          {
            id:2,
            title: "家长咨询",
            desc: ["协助家长更好地理解孩子或青少年的情绪需求、行为表现及沟通模式，并共同探讨更适合家庭现阶段需要的支持方式。"]
          },
          {
            id:3,
            title: "个人心理咨询(成人)",
            desc: ["提供一个安全、保密且不带评判的空间，让成人能够探索情绪困扰、面对生活挑战，并以自己的步调迈向更有意义及符合自身价值的生活。"]
          },
          // {
          //   title: "职业咨询",
          //   desc: ["协助个人探索职业方向、升学路径、决策过程及学习或职场转换。"]
          // },
          {
            id:4,
            title: "心理健康讲座与工作坊 (可按需求安排)",
            desc: ["可根据学校、机构、企业或团体的需要设计及安排相关主题讲座、工作坊或培训活动。",""]
          }
        ]
      },
      "services_support_title": "支持领域",
      "services_support": [
        '情绪与心理健康支持',
        '个人成长与自我理解',
        '人际关系与互动议题',
        '家庭互动与亲职支持',
        '人生转变与决策支持'
      ],
      "practitioner_title": "关于心理辅导与咨询师",
      "practitioner_data": [
        '马来西亚辅导局注册心理辅导师',
        '马来西亚辅导局认证督导',
        '辅导与咨询硕士'
      ],
      "practitioner_para1":"Rachael 是一名注册心理辅导师及认证督导，提供青少年与成人心理咨询服务。",
      "practitioner_para2":"她拥有丰富的校园工作经验，长期支持青少年、家长及教育工作者面对情绪、人际关系、成长发展及生活压力等议题。她亦曾担任辅导团队领导工作，并参与学校心理健康与福祉工作的规划与推动。",
      "practitioner_para3":"她以好奇、同理与合作的态度开展工作，在安全且不带评判的空间中，陪伴个体探索自身的内在经验，并以自己的节奏走向更有意义与真实的改变。",
      "practitioner_more":"阅读更多",
      "session_title":"辅导与咨询形式",
      "session_online":"线上",
      "session_location":"芙蓉新城 S2（筹备中）",
      "session_hours":"辅导与咨询时段",
      "session_operation_hours1": "星期一至星期五: 上午9:30 - 下午5:00",
      "session_operation_hours2": "星期六: 上午9:30 - 下午12:30",
      "session_hours_info":"若需以上时段以外的预约时间，欢迎联系查询。",
      "book_title":"预约辅导与咨询",
      "book_subtitle":"若您希望进一步了解服务内容，或准备开始辅导旅程，欢迎通过 WhatsApp联系。",
      "book_note":"温馨提示：",
      "book_note_lists": [
        "讯息通常将于工作日的24 - 48小时内依序回复。",
        "R+ 心理辅导与咨询并不提供即时危机干预服务。如遇紧急心理危机，请即刻致电以下24小时热线或前往邻近医院急诊部。"
      ],
      "book_hotlines": [
        "Befrienders: 03-7627 2929",
        "Talian Kasih: 15999",
        "HEAL Line: 15555 (卫生部心理健康援助热线)",
      ],
      "book_btn":"预约辅导与咨询",
      "book_pre_fill": "你好，我想预约辅导咨询。",
      "footer_explore":"探索",
      "footer_session":"咨询",
    }
  }
};

i18n
  .use(LanguageDetector) // 自动检测浏览器语言
  .use(initReactI18next) // 绑定 react-i18next
  .init({
    resources,
    fallbackLng: "en", // 如果检测不到语言，默认使用英文
    interpolation: {
      escapeValue: false // React 已经自带防 XSS 攻击
    },
  });

export default i18n;