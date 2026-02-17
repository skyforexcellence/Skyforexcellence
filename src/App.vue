<template>
  <div class="layout-root">
    <header class="layout-header">
      <div>
        <div class="layout-header-title">
          DSE 中史︰田制與兵制精讀
        </div>
        <div class="layout-header-sub">
          
        </div>
      </div>
      <div class="layout-header-sub">
       
      </div>
    </header>
    <main class="layout-main">
      <aside class="layout-side">
        <div class="nav-group">
          <div class="nav-group-title">
            首頁
          </div>
          <ul class="nav-link-list">
            <li class="nav-link-item">
              <RouterLink to="/" class="nav-link" active-class="nav-link-active">
                使用說明與學習建議
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="nav-group">
          <div class="nav-group-title">
            田制專題
          </div>
          <div class="nav-group-description">
            按朝代細分︰由先秦到清
          </div>
          <ul class="nav-link-list">
            <li class="nav-link-item">
              <RouterLink to="/tian/overview" class="nav-link" active-class="nav-link-active">
                田制整體概覽
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/pre-qin" class="nav-link" active-class="nav-link-active">
                先秦︰井田制與貴族土地
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/qin-han" class="nav-link" active-class="nav-link-active">
                秦漢︰小農經濟與土地兼併
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/wei-jin" class="nav-link" active-class="nav-link-active">
                魏晉南北朝︰占田制、課田制與屯田
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/bei-wei" class="nav-link" active-class="nav-link-active">
                北魏︰均田制的雛形
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/sui" class="nav-link" active-class="nav-link-active">
                隋︰均田制的承接與實行
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/tang" class="nav-link" active-class="nav-link-active">
                唐︰均田制發展與兩稅法
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/song" class="nav-link" active-class="nav-link-active">
                宋︰地主經濟與田稅
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/yuan" class="nav-link" active-class="nav-link-active">
                元︰軍戶、屯田與土地管理
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/ming" class="nav-link" active-class="nav-link-active">
                明︰土地登記與田賦改革
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/qing" class="nav-link" active-class="nav-link-active">
                清︰地丁合一與土地負擔
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/tian/summary" class="nav-link" active-class="nav-link-active">
                田制小結與比較
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="nav-group">
          <div class="nav-group-title">
            兵制專題
          </div>
          <div class="nav-group-description">
            由貴族軍隊、徵兵、府兵到募兵與衛所制
          </div>
          <ul class="nav-link-list">
            <li class="nav-link-item">
              <RouterLink to="/bing/overview" class="nav-link" active-class="nav-link-active">
                兵制整體概覽
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/pre-qin" class="nav-link" active-class="nav-link-active">
                先秦︰貴族軍隊與民兵
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/qin-han" class="nav-link" active-class="nav-link-active">
                秦漢︰徵兵制與初步募兵
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/wei-jin" class="nav-link" active-class="nav-link-active">
                魏晉南北朝︰世兵制與胡漢雜糅
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/sui" class="nav-link" active-class="nav-link-active">
                隋︰府兵制的承接與嘗試
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/tang" class="nav-link" active-class="nav-link-active">
                唐︰府兵制發展與藩鎮化
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/song" class="nav-link" active-class="nav-link-active">
                宋︰募兵為主的禁軍體系
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/yuan" class="nav-link" active-class="nav-link-active">
                元︰軍戶與千戶、萬戶制
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/ming" class="nav-link" active-class="nav-link-active">
                明︰衛所制與募兵並行
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/qing" class="nav-link" active-class="nav-link-active">
                清︰八旗、綠營與新軍
              </RouterLink>
            </li>
            <li class="nav-link-item">
              <RouterLink to="/bing/summary" class="nav-link" active-class="nav-link-active">
                兵制小結與比較
              </RouterLink>
            </li>
          </ul>
        </div>
      </aside>
      <section class="layout-content">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<script setup>
</script>
