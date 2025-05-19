// 城市数据示例
const cityData = {
  "北京": {
    intro: "北京，作为中国的首都，拥有三千余年建城史和八百余年建都史，是中国的政治、文化和国际交流中心。故宫、长城、天安门广为人知。",
    food: {
      city: [
        {
          name: "北京烤鸭",
          desc: "色泽红亮、外脆里嫩，是北京最具代表性的美食。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'>
            <ellipse cx='24' cy='36' rx='16' ry='8' fill='#f7c873' fill-opacity='0.5'/>
            <ellipse cx='24' cy='28' rx='13' ry='7' fill='#fff3e0' fill-opacity='0.8'/>
            <!-- 盘子 -->
            <ellipse cx='24' cy='28' rx='12' ry='6' fill='#f5e1b8' fill-opacity='0.7'/>
            <!-- 切片状烤鸭 -->
            <g>
              <ellipse cx='16' cy='28' rx='4' ry='2' fill='#e07a3f' fill-opacity='0.85' stroke='#b85a1a' stroke-width='0.7'/>
              <ellipse cx='20' cy='30' rx='4' ry='2' fill='#e07a3f' fill-opacity='0.8' stroke='#b85a1a' stroke-width='0.7'/>
              <ellipse cx='24' cy='31' rx='4' ry='2' fill='#e07a3f' fill-opacity='0.8' stroke='#b85a1a' stroke-width='0.7'/>
              <ellipse cx='28' cy='30' rx='4' ry='2' fill='#e07a3f' fill-opacity='0.8' stroke='#b85a1a' stroke-width='0.7'/>
              <ellipse cx='32' cy='28' rx='4' ry='2' fill='#e07a3f' fill-opacity='0.85' stroke='#b85a1a' stroke-width='0.7'/>
            </g>
            <!-- 高光 -->
            <ellipse cx='24' cy='29' rx='7' ry='2' fill='#fff' fill-opacity='0.18'/>
          </svg>`,
          restaurants: [
            { name: "全聚德", reason: "百年老字号，正宗挂炉烤制", history: "自1864年创立，专注烤鸭制作超百年", highlight: "皮脆肉嫩，果木香气浓郁" },
            { name: "大董烤鸭店", reason: "创新与传统结合，口味独特", history: "90年代创立，主打健康烤鸭", highlight: "低脂烤制，蘸料丰富" },
            { name: "便宜坊", reason: "焖炉烤鸭代表，老北京风味", history: "始于1416年，明代传承", highlight: "鸭肉多汁，入口即化" }
          ]
        },
        {
          name: "炸酱面",
          desc: "面条筋道，酱香浓郁，是老北京人的家常美味。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'>
            <ellipse cx='24' cy='38' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/>
            <!-- 碗 -->
            <ellipse cx='24' cy='30' rx='13' ry='7' fill='#fffbe6' fill-opacity='0.9'/>
            <ellipse cx='24' cy='30' rx='12' ry='6' fill='#f5e1b8' fill-opacity='0.7'/>
            <!-- 面条 -->
            <path d='M16 28 Q18 32 24 32 Q30 32 32 28' stroke='#e2c07b' stroke-width='2.2' fill='none' stroke-linecap='round'/>
            <path d='M18 29 Q20 34 24 34 Q28 34 30 29' stroke='#e2c07b' stroke-width='2.2' fill='none' stroke-linecap='round'/>
            <path d='M20 28 Q22 36 24 36 Q26 36 28 28' stroke='#e2c07b' stroke-width='2.2' fill='none' stroke-linecap='round'/>
            <!-- 炸酱 -->
            <ellipse cx='24' cy='28' rx='7' ry='3' fill='#b97a56' fill-opacity='0.8'/>
            <ellipse cx='24' cy='28' rx='5' ry='2' fill='#a06a3a' fill-opacity='0.7'/>
            <!-- 高光 -->
            <ellipse cx='24' cy='32' rx='7' ry='2' fill='#fff' fill-opacity='0.13'/>
          </svg>`,
          restaurants: [
            { name: "海碗居", reason: "地道老北京炸酱面", history: "老字号，专注面食三十余年", highlight: "面条筋道，酱香浓郁" },
            { name: "老北京炸酱面大王", reason: "平价实惠，口味正宗", history: "本地人常去的面馆", highlight: "酱料丰富，配菜新鲜" },
            { name: "柳泉居", reason: "百年老店，面食经典", history: "始于清朝，传承老北京味道", highlight: "面条爽滑，酱香浓郁" }
          ]
        },
        {
          name: "豆汁儿",
          desc: "独特发酵风味，配焦圈、咸菜，老北京早餐代表。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='36' rx='16' ry='8' fill='#b0d6b0' fill-opacity='0.5'/><ellipse cx='24' cy='24' rx='12' ry='8' fill='#e0f7e0' fill-opacity='0.8'/><ellipse cx='24' cy='24' rx='8' ry='4' fill='#b0d6b0' fill-opacity='0.7'/></svg>`,
          restaurants: []
        },
        {
          name: "卤煮火烧",
          desc: "猪杂与火烧同煮，汤浓味厚，是北京地道小吃。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='36' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><ellipse cx='24' cy='24' rx='12' ry='8' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='24' rx='8' ry='4' fill='#b97a56' fill-opacity='0.7'/></svg>`,
          restaurants: []
        },
        {
          name: "焦圈",
          desc: "外酥里嫩，配豆汁儿最佳拍档。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='36' rx='16' ry='8' fill='#f7c873' fill-opacity='0.5'/><ellipse cx='24' cy='24' rx='10' ry='6' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='24' rx='7' ry='3' fill='#e07a3f' fill-opacity='0.7'/></svg>`,
          restaurants: []
        },
        {
          name: "驴打滚",
          desc: "糯米卷裹豆沙，外层撒黄豆粉，香甜软糯。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='36' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><ellipse cx='24' cy='24' rx='10' ry='6' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='24' rx='7' ry='3' fill='#f7c873' fill-opacity='0.7'/></svg>`,
          restaurants: []
        }
      ],
      region: [
        {
          name: "涮羊肉",
          desc: "北方冬季特色，鲜美羊肉配以多种蘸料。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='36' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><ellipse cx='24' cy='24' rx='14' ry='10' fill='#fffbeee' fill-opacity='0.8'/><ellipse cx='24' cy='24' rx='10' ry='6' fill='#e07a3f' fill-opacity='0.5'/><ellipse cx='24' cy='24' rx='6' ry='3' fill='#fff' fill-opacity='0.7'/></svg>`,
          reason: "北京冬季寒冷，涮羊肉温暖驱寒，讲究蘸料和羊肉新鲜"
        },
        {
          name: "爆肚",
          desc: "牛羊肚切片，涮烫后蘸麻酱，口感脆嫩。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><ellipse cx='24' cy='28' rx='12' ry='6' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='28' rx='8' ry='3' fill='#e07a3f' fill-opacity='0.7'/></svg>`,
          reason: "爆肚是京津冀地区的传统小吃，讲究火候和蘸料，入口脆嫩。"
        },
        {
          name: "门钉肉饼",
          desc: "外皮酥脆、内馅多汁的圆形肉饼，形似门钉。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='36' rx='16' ry='8' fill='#f7c873' fill-opacity='0.5'/><ellipse cx='24' cy='28' rx='10' ry='5' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='28' rx='7' ry='3' fill='#e07a3f' fill-opacity='0.7'/></svg>`,
          reason: "门钉肉饼在京津冀一带流行，外酥里嫩，肉香四溢。"
        },
        {
          name: "酱牛肉",
          desc: "牛肉慢火酱煮，色泽红亮，咸香入味。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><ellipse cx='24' cy='28' rx='12' ry='6' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='28' rx='8' ry='3' fill='#b97a56' fill-opacity='0.7'/></svg>`,
          reason: "酱牛肉是北方常见凉菜，适合夏日佐餐，咸香耐嚼。"
        },
        {
          name: "豆腐脑",
          desc: "细腻豆花配咸鲜卤汁，入口即化。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><ellipse cx='24' cy='28' rx='12' ry='6' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='28' rx='8' ry='3' fill='#fff' fill-opacity='0.7'/></svg>`,
          reason: "豆腐脑在北方各地流行，咸鲜口味，早餐常见。"
        }
      ]
    },
    travel: {
      classic: [
        { name: "故宫", desc: "世界现存规模最大、保存最为完整的木质结构古建筑之一。", coord: [160, 100], bestTime: "春秋两季", tips: { ticket: "需要门票", advance: "建议提前7天订票", open: "8:30-17:00" } },
        { name: "长城", desc: "中华民族的象征，蜿蜒于群山之间。", coord: [60, 40], bestTime: "春秋两季", tips: { ticket: "需要门票", advance: "建议提前3天订票", open: "7:30-17:30" } },
        { name: "天坛", desc: "明清两代皇帝祭天祈谷之地。", coord: [200, 160], bestTime: "春秋两季", tips: { ticket: "需要门票", advance: "建议提前3天订票", open: "8:00-17:00" } },
        { name: "颐和园", desc: "中国现存规模最大、保存最完整的皇家园林。", coord: [60, 180], bestTime: "4-10月", tips: { ticket: "需要门票", advance: "建议提前3天订票", open: "6:30-18:00" } },
        { name: "北海公园", desc: "中国古代皇家园林，湖光塔影，风景秀丽。", coord: [120, 80], bestTime: "4-10月", tips: { ticket: "需要门票", advance: "无需提前", open: "6:30-21:00" } },
        { name: "雍和宫", desc: "著名藏传佛教寺院，建筑精美。", coord: [220, 80], bestTime: "全年", tips: { ticket: "需要门票", advance: "无需提前", open: "9:00-16:00" } },
        { name: "圆明园", desc: "昔日皇家园林，现为遗址公园。", coord: [80, 160], bestTime: "4-10月", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "7:00-19:00" } },
        { name: "什刹海", desc: "历史文化风貌区，水域与胡同交融。", coord: [140, 60], bestTime: "5-10月", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } }
      ],
      modern: [
        { name: "三里屯", desc: "北京最具活力的时尚娱乐区。", coord: [240, 120], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "10:00-次日2:00" } },
        { name: "798艺术区", desc: "现代艺术与工业遗存融合的创意园区。", coord: [260, 60], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "10:00-18:00" } },
        { name: "奥林匹克公园", desc: "鸟巢、水立方等地标性建筑聚集地。", coord: [200, 60], bestTime: "4-10月", tips: { ticket: "部分场馆需门票", advance: "建议提前1天订票", open: "9:00-21:00" } },
        { name: "国家大剧院", desc: "水中蛋壳造型，现代艺术地标。", coord: [180, 120], bestTime: "全年", tips: { ticket: "需门票（参观/演出）", advance: "建议提前3天订票", open: "9:00-17:00" } },
        { name: "北京欢乐谷", desc: "大型主题游乐园，适合家庭娱乐。", coord: [280, 180], bestTime: "4-10月", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "9:30-22:00" } },
        { name: "蓝色港湾", desc: "集购物、餐饮、娱乐于一体的时尚生活区。", coord: [240, 180], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "10:00-22:00" } },
        { name: "望京SOHO", desc: "现代商务区，建筑造型独特。", coord: [280, 80], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } },
        { name: "北京坊", desc: "融合历史与现代的城市新地标。", coord: [120, 140], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "10:00-22:00" } }
      ],
      bestTime: "春秋两季气候宜人，适合游览。",
      tips: "节假日游客较多，建议提前规划路线，注意防晒和补水。"
    }
  },
  "上海": {
    intro: "上海，中国最大的经济中心城市之一，融合了中西文化，外滩、东方明珠等地标性建筑闻名遐迩。",
    food: {
      city: [
        {
          name: "小笼包",
          desc: "皮薄馅多、汤汁鲜美，是上海的代表小吃。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#f7e1b8' fill-opacity='0.5'/><ellipse cx='24' cy='28' rx='12' ry='7' fill='#fffbe6' fill-opacity='0.9'/><ellipse cx='24' cy='28' rx='10' ry='5' fill='#f7e1b8' fill-opacity='0.7'/><ellipse cx='24' cy='25' rx='7' ry='3' fill='#e0b87a' fill-opacity='0.7'/><path d='M18 25 Q24 20 30 25' stroke='#e0b87a' stroke-width='1.5' fill='none'/></svg>`,
          restaurants: [
            { name: "南翔馒头店", reason: "百年老店，正宗南翔小笼", history: "始于1900年，传承经典做法", highlight: "皮薄馅多，汤汁鲜美" },
            { name: "佳家汤包", reason: "本地人推荐，口味多样", history: "上海本地连锁，专注汤包", highlight: "汤汁丰富，皮薄不破" },
            { name: "鼎泰丰", reason: "国际知名，服务优质", history: "台湾品牌，上海分店口碑佳", highlight: "标准化制作，口感稳定" }
          ]
        },
        {
          name: "生煎包",
          desc: "底脆皮香，肉馅多汁，深受本地人喜爱。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#f7e1b8' fill-opacity='0.5'/><ellipse cx='24' cy='28' rx='12' ry='7' fill='#fffbe6' fill-opacity='0.9'/><ellipse cx='24' cy='32' rx='10' ry='3' fill='#e0b87a' fill-opacity='0.7'/><ellipse cx='24' cy='25' rx='7' ry='3' fill='#e0b87a' fill-opacity='0.7'/></svg>`,
          restaurants: [
            { name: "小杨生煎", reason: "上海生煎代表品牌", history: "90年代创立，连锁遍布上海", highlight: "底脆皮香，肉馅多汁" },
            { name: "大壶春", reason: "老字号，传统做法", history: "始于1932年，专注生煎包", highlight: "皮薄馅大，汤汁丰富" },
            { name: "丰裕生煎", reason: "本地人常去，口味地道", history: "上海本地品牌", highlight: "底脆不油腻，肉香浓郁" }
          ]
        },
        {
          name: "本帮红烧肉",
          desc: "色泽红亮，肥而不腻，入口即化，是上海家常菜代表。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><rect x='14' y='24' width='20' height='10' rx='5' fill='#b97a56' fill-opacity='0.8' stroke='#a06a3a' stroke-width='1.5'/><rect x='16' y='26' width='16' height='6' rx='3' fill='#e07a3f' fill-opacity='0.7'/></svg>`,
          restaurants: [
            { name: "老吉士", reason: "本帮菜名店，红烧肉招牌", history: "上海本地老字号", highlight: "肥而不腻，酱香浓郁" },
            { name: "王宝和酒家", reason: "百年酒家，传统本帮菜", history: "始于1744年，红烧肉经典", highlight: "入口即化，色泽红亮" },
            { name: "新雅粤菜馆", reason: "老字号，融合创新", history: "上海知名餐饮品牌", highlight: "口感软糯，甜咸适中" }
          ]
        }
      ],
      region: [
        {
          name: "蟹壳黄",
          desc: "外皮酥脆、内馅丰富的上海传统点心。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='36' rx='16' ry='8' fill='#f7c873' fill-opacity='0.5'/><ellipse cx='24' cy='28' rx='10' ry='5' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='28' rx='7' ry='3' fill='#e07a3f' fill-opacity='0.7'/></svg>`,
          reason: "蟹壳黄是上海人早餐和下午茶的常见选择，外酥里香。"
        },
        {
          name: "葱油拌面",
          desc: "香葱与酱油拌面，简单却极具风味。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><ellipse cx='24' cy='30' rx='12' ry='6' fill='#fffbe6' fill-opacity='0.8'/><path d='M16 30 Q24 36 32 30' stroke='#b97a56' stroke-width='2' fill='none'/></svg>`,
          reason: "葱油拌面是上海家常面食，香气扑鼻，老少皆宜。"
        },
        {
          name: "排骨年糕",
          desc: "糯米年糕配酱香排骨，软糯入味。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><rect x='16' y='30' width='16' height='6' rx='3' fill='#fffbe6' fill-opacity='0.8'/><rect x='20' y='32' width='8' height='3' rx='1.5' fill='#b97a56' fill-opacity='0.7'/></svg>`,
          reason: "排骨年糕是上海本地特色，糯米年糕软糯，排骨酱香浓郁。"
        },
        {
          name: "生煎馒头",
          desc: "底脆皮香，肉馅多汁的上海小吃。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#f7e1b8' fill-opacity='0.5'/><ellipse cx='24' cy='28' rx='10' ry='5' fill='#fffbe6' fill-opacity='0.8'/><ellipse cx='24' cy='32' rx='7' ry='2' fill='#e0b87a' fill-opacity='0.7'/></svg>`,
          reason: "生煎馒头是上海人早餐和夜宵的热门选择，皮脆馅多。"
        },
        {
          name: "糍饭团",
          desc: "糯米包裹油条、肉松等丰富配料，口感层次丰富。",
          illustration: `<svg width='48' height='48' viewBox='0 0 48 48'><ellipse cx='24' cy='38' rx='16' ry='8' fill='#e0cfa0' fill-opacity='0.5'/><ellipse cx='24' cy='30' rx='12' ry='6' fill='#fffbe6' fill-opacity='0.8'/></svg>`,
          reason: "糍饭团是上海及江南地区常见早餐，糯米香软，配料丰富。"
        }
      ]
    },
    travel: {
      classic: [
        { name: "外滩", desc: "欣赏黄浦江两岸风光，感受老上海风情。", coord: [120, 80], bestTime: "春秋两季", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } },
        { name: "豫园", desc: "江南古典园林，亭台楼阁精美。", coord: [180, 120], bestTime: "3-5月、9-11月", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "8:30-17:00" } },
        { name: "南京路步行街", desc: "中国最著名的商业街之一，购物天堂。", coord: [160, 100], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } }
      ],
      modern: [
        { name: "东方明珠", desc: "上海地标性建筑，可俯瞰城市全景。", coord: [200, 60], bestTime: "全年", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "8:00-21:30" } },
        { name: "田子坊", desc: "创意园区，老弄堂与文艺小店融合。", coord: [220, 140], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "10:00-22:00" } },
        { name: "上海迪士尼乐园", desc: "国际顶级主题乐园，适合家庭出游。", coord: [280, 180], bestTime: "4-10月", tips: { ticket: "需要门票", advance: "建议提前7天订票", open: "8:30-21:00" } }
      ],
      bestTime: "春秋季节气候温和，适合出行。",
      tips: "地铁交通便利，建议避开高峰时段。"
    },
    quotes: [
      "‘上海的弄堂和小吃，是生活的温柔乡。’——汪曾祺",
      "‘上海是我成长的地方。’——周立波"
    ]
  },
  "广州": {
    intro: "广州，岭南文化发源地，历史悠久，是中国南方的重要城市，以美食和商贸著称。",
    food: {
      city: [
        { name: "肠粉", desc: "米浆蒸制，口感滑嫩，配以酱油食用。" },
        { name: "烧鹅", desc: "皮脆肉嫩，色泽诱人，是粤菜代表。" }
      ],
      region: [
        { name: "早茶", desc: "点心丰富，茶香四溢，是岭南饮食文化的缩影。" }
      ]
    },
    travel: {
      classic: [
        { name: "白云山", desc: "广州著名风景区，登高望远好去处。", coord: [120, 60], bestTime: "10月至次年3月", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "6:00-18:00" } },
        { name: "陈家祠", desc: "岭南建筑艺术瑰宝，雕刻精美。", coord: [180, 100], bestTime: "10月至次年3月", tips: { ticket: "需要门票", advance: "无需提前", open: "8:30-17:30" } },
        { name: "沙面岛", desc: "欧式建筑群，适合休闲漫步。", coord: [160, 140], bestTime: "10月至次年3月", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } }
      ],
      modern: [
        { name: "广州塔", desc: "中国第一高塔，夜景迷人。", coord: [200, 60], bestTime: "全年", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "9:00-22:00" } },
        { name: "珠江新城", desc: "现代都市CBD，摩天大楼林立。", coord: [220, 120], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } },
        { name: "长隆旅游度假区", desc: "大型主题乐园，适合家庭娱乐。", coord: [280, 180], bestTime: "10月至次年3月", tips: { ticket: "需要门票", advance: "建议提前3天订票", open: "9:30-21:00" } }
      ],
      bestTime: "10月至次年3月气候宜人，适合旅游。",
      tips: "夏季炎热多雨，注意防晒防雨。"
    },
    quotes: [
      "‘广州的早茶，是人间烟火气最美的模样。’——蔡澜",
      "‘广州是我心中的家。’——余秋雨"
    ]
  },
  "武汉": {
    intro: "武汉，九省通衢，长江与汉江交汇之地，历史文化底蕴深厚，现代都市活力十足。",
    food: {
      city: [
        { name: "热干面", desc: "芝麻酱香浓，面条筋道，是武汉最具代表性的早餐。" },
        { name: "豆皮", desc: "糯米、肉末、蛋皮层层叠加，香糯可口。" }
      ],
      region: [
        { name: "三鲜豆皮", desc: "糯米、香菇、肉末等丰富配料，层次分明。" }
      ]
    },
    travel: {
      classic: [
        { name: "黄鹤楼", desc: "江南三大名楼之一，登楼远眺长江美景。", coord: [140, 80], bestTime: "3-5月、9-11月", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "8:00-18:00" } },
        { name: "东湖", desc: "中国城市内最大的湖泊，风景优美。", coord: [200, 120], bestTime: "3-5月、9-11月", tips: { ticket: "部分区域需门票", advance: "无需提前", open: "6:00-20:00" } },
        { name: "武汉大学", desc: "樱花盛开时节美不胜收。", coord: [160, 160], bestTime: "3-4月", tips: { ticket: "无需门票", advance: "樱花季需预约", open: "7:00-22:00" } }
      ],
      modern: [
        { name: "汉街", desc: "现代商业步行街，购物娱乐一体。", coord: [220, 100], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "10:00-22:00" } },
        { name: "光谷广场", desc: "科技与时尚交融的城市新地标。", coord: [240, 140], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } },
        { name: "武汉天地", desc: "融合历史与现代的休闲区。", coord: [180, 180], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "10:00-22:00" } }
      ],
      bestTime: "3-5月、9-11月气候宜人，适合出游。",
      tips: "夏季炎热，注意防晒补水。"
    },
    quotes: [
      "‘黄鹤楼中吹玉笛，江城五月落梅花。’——李白",
      "‘武汉是一座英雄的城市。’——毛泽东"
    ]
  },
  "深圳": {
    intro: "深圳，中国改革开放的窗口，现代化国际大都市，创新与活力并存。",
    food: {
      city: [
        { name: "肠粉", desc: "米浆蒸制，口感滑嫩，配以酱油食用。" },
        { name: "烧鹅", desc: "皮脆肉嫩，色泽诱人，是粤菜代表。" }
      ],
      region: [
        { name: "客家酿豆腐", desc: "豆腐夹肉馅，鲜香可口，是深圳及珠三角常见家常菜。" }
      ]
    },
    travel: {
      classic: [
        { name: "大梅沙海滨公园", desc: "深圳著名海滨浴场，沙滩细腻。", coord: [120, 60], bestTime: "4-10月", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } },
        { name: "莲花山公园", desc: "市区绿肺，登高可俯瞰城市全景。", coord: [180, 100], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "6:00-22:00" } },
        { name: "深圳博物馆", desc: "展示深圳发展历史与文化。", coord: [160, 140], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "10:00-18:00" } }
      ],
      modern: [
        { name: "华侨城欢乐谷", desc: "大型主题乐园，适合家庭娱乐。", coord: [200, 60], bestTime: "全年", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "9:30-21:00" } },
        { name: "深圳湾公园", desc: "滨海长廊，适合骑行与散步。", coord: [220, 120], bestTime: "全年", tips: { ticket: "无需门票", advance: "无需提前", open: "全天开放" } },
        { name: "平安金融中心观光层", desc: "俯瞰深圳全景的高空观光点。", coord: [280, 180], bestTime: "全年", tips: { ticket: "需要门票", advance: "建议提前1天订票", open: "9:00-22:00" } }
      ],
      bestTime: "10月至次年3月气候宜人，适合旅游。",
      tips: "夏季炎热多雨，注意防晒防雨。"
    },
    quotes: [
      "‘深圳速度，创造了中国奇迹。’——邓小平",
      "‘深圳是一座年轻的城市。’——余秋雨"
    ]
  },
  "成都": {
    intro: "成都，天府之国，历史文化名城，以美食、熊猫和悠闲生活闻名。",
    food: {
      city: [
        { name: "火锅", desc: "麻辣鲜香，食材丰富，是成都人最爱的美食。" },
        { name: "兔头", desc: "麻辣入味，是成都独有的特色小吃。" }
      ],
      region: [
        { name: "川菜", desc: "以麻辣著称，口味多变，享誉全国。" }
      ]
    },
    travel: {
      spots: [
        { name: "宽窄巷子", desc: "体验老成都生活气息，品味川西民居。" },
        { name: "成都大熊猫繁育研究基地", desc: "观赏憨态可掬的大熊猫。" }
      ],
      bestTime: "3-6月、9-11月气候宜人。",
      tips: "美食较辣，初次品尝建议适量。"
    }
  },
  "西安": {
    intro: "西安，十三朝古都，历史遗迹众多，是中华文明的重要发源地。兵马俑、古城墙等享誉世界。",
    food: {
      city: [
        { name: "肉夹馍", desc: "外酥里嫩，肉香四溢，是西安最具代表性的美食。" },
        { name: "凉皮", desc: "筋道爽口，配以辣椒和醋，夏日解暑佳品。" }
      ],
      region: [
        { name: "陕北面食", desc: "花样繁多，口感独特，是陕西饮食文化的代表。" }
      ]
    },
    travel: {
      spots: [
        { name: "兵马俑", desc: "世界第八大奇迹，秦始皇陵的重要组成部分。" },
        { name: "古城墙", desc: "中国现存最完整的古代城垣建筑。" }
      ],
      bestTime: "春秋两季气候适宜，适合出游。",
      tips: "夏季炎热，注意防晒补水。"
    }
  }
}; 
