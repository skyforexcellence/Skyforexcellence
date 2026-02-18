import { createRouter, createWebHashHistory } from "vue-router";
import TianOverview from "../views/tian/TianOverview.vue";
import TianPreQin from "../views/tian/TianPreQin.vue";
import TianQinHan from "../views/tian/TianQinHan.vue";
import TianWeiJin from "../views/tian/TianWeiJin.vue";
import TianBeiWei from "../views/tian/TianBeiWei.vue";
import TianSui from "../views/tian/TianSui.vue";
import TianTang from "../views/tian/TianTang.vue";
import TianSong from "../views/tian/TianSong.vue";
import TianYuan from "../views/tian/TianYuan.vue";
import TianMing from "../views/tian/TianMing.vue";
import TianQing from "../views/tian/TianQing.vue";
import Tian2018 from "../views/tian/Tian2018.vue";
import Tian2019 from "../views/tian/Tian2019.vue";
import Tian2020 from "../views/tian/Tian2020.vue";
import Tian2021 from "../views/tian/Tian2021.vue";
import Tian2022 from "../views/tian/Tian2022.vue";
import Tian2023 from "../views/tian/Tian2023.vue";
import TianSummary from "../views/tian/TianSummary.vue";
import BingOverview from "../views/bing/BingOverview.vue";
import BingPreQin from "../views/bing/BingPreQin.vue";
import BingQinHan from "../views/bing/BingQinHan.vue";
import BingWeiJin from "../views/bing/BingWeiJin.vue";
import BingSui from "../views/bing/BingSui.vue";
import BingTang from "../views/bing/BingTang.vue";
import BingSong from "../views/bing/BingSong.vue";
import BingYuan from "../views/bing/BingYuan.vue";
import BingMing from "../views/bing/BingMing.vue";
import BingQing from "../views/bing/BingQing.vue";
import Bing2020 from "../views/bing/Bing2020.vue";
import Bing2021 from "../views/bing/Bing2021.vue";
import Bing2022 from "../views/bing/Bing2022.vue";
import BingSummary from "../views/bing/BingSummary.vue";
import KejuTang from "../views/keju/KejuTang.vue";
import KejuSong from "../views/keju/KejuSong.vue";
import KejuMing from "../views/keju/KejuMing.vue";
import Keju2018 from "../views/keju/Keju2018.vue";
import Keju2019 from "../views/keju/Keju2019.vue";
import Keju2020 from "../views/keju/Keju2020.vue";
import Keju2021 from "../views/keju/Keju2021.vue";
import Keju2022 from "../views/keju/Keju2022.vue";
import Keju2023 from "../views/keju/Keju2023.vue";

const routes = [
  { path: "/", name: "tian-overview", component: TianOverview },
  { path: "/tian/overview", name: "tian-overview", component: TianOverview },
  { path: "/tian/pre-qin", name: "tian-pre-qin", component: TianPreQin },
  { path: "/tian/qin-han", name: "tian-qin-han", component: TianQinHan },
  { path: "/tian/wei-jin", name: "tian-wei-jin", component: TianWeiJin },
  { path: "/tian/bei-wei", name: "tian-bei-wei", component: TianBeiWei },
  { path: "/tian/sui", name: "tian-sui", component: TianSui },
  { path: "/tian/tang", name: "tian-tang", component: TianTang },
  { path: "/tian/song", name: "tian-song", component: TianSong },
  { path: "/tian/yuan", name: "tian-yuan", component: TianYuan },
  { path: "/tian/ming", name: "tian-ming", component: TianMing },
  { path: "/tian/qing", name: "tian-qing", component: TianQing },
  { path: "/tian/2018", name: "tian-2018", component: Tian2018 },
  { path: "/tian/2019", name: "tian-2019", component: Tian2019 },
  { path: "/tian/2020", name: "tian-2020", component: Tian2020 },
  { path: "/tian/2021", name: "tian-2021", component: Tian2021 },
  { path: "/tian/2022", name: "tian-2022", component: Tian2022 },
  { path: "/tian/2023", name: "tian-2023", component: Tian2023 },
  { path: "/tian/summary", name: "tian-summary", component: TianSummary },
  { path: "/bing/overview", name: "bing-overview", component: BingOverview },
  { path: "/bing/pre-qin", name: "bing-pre-qin", component: BingPreQin },
  { path: "/bing/qin-han", name: "bing-qin-han", component: BingQinHan },
  { path: "/bing/wei-jin", name: "bing-wei-jin", component: BingWeiJin },
  { path: "/bing/sui", name: "bing-sui", component: BingSui },
  { path: "/bing/tang", name: "bing-tang", component: BingTang },
  { path: "/bing/song", name: "bing-song", component: BingSong },
  { path: "/bing/yuan", name: "bing-yuan", component: BingYuan },
  { path: "/bing/ming", name: "bing-ming", component: BingMing },
  { path: "/bing/qing", name: "bing-qing", component: BingQing },
  { path: "/bing/2020", name: "bing-2020", component: Bing2020 },
  { path: "/bing/2021", name: "bing-2021", component: Bing2021 },
  { path: "/bing/2022", name: "bing-2022", component: Bing2022 },
  { path: "/bing/summary", name: "bing-summary", component: BingSummary },
  { path: "/keju/tang", name: "keju-tang", component: KejuTang },
  { path: "/keju/song", name: "keju-song", component: KejuSong },
  { path: "/keju/ming", name: "keju-ming", component: KejuMing },
  { path: "/keju/2018", name: "keju-2018", component: Keju2018 },
  { path: "/keju/2019", name: "keju-2019", component: Keju2019 },
  { path: "/keju/2020", name: "keju-2020", component: Keju2020 },
  { path: "/keju/2021", name: "keju-2021", component: Keju2021 },
  { path: "/keju/2022", name: "keju-2022", component: Keju2022 },
  { path: "/keju/2023", name: "keju-2023", component: Keju2023 }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
