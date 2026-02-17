<template>
  <div class="layout-root">
    <header class="layout-header">
      <button class="hamburger-btn" @click="toggleMenu" :class="{ 'active': menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="header-title">
        DSE 中史︰田制與兵制精讀
      </div>
    </header>

    <!-- 顶部导航栏 -->
    <nav class="top-nav" :class="{ 'open': menuOpen }">
      <div class="nav-group">
        <div class="nav-group-title">田制專題</div>
        <div class="nav-group-description">按朝代細分︰由先秦到清</div>
        <RouterLink to="/tian/overview" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          田制整體概覽
        </RouterLink>
        <RouterLink to="/tian/pre-qin" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          先秦︰井田制與貴族土地
        </RouterLink>
        <RouterLink to="/tian/qin-han" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          秦漢︰小農經濟與土地兼併
        </RouterLink>
        <RouterLink to="/tian/wei-jin" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          魏晉南北朝︰占田制、課田制與屯田
        </RouterLink>
        <RouterLink to="/tian/bei-wei" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          北魏︰均田制的雛形
        </RouterLink>
        <RouterLink to="/tian/sui" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          隋︰均田制的承接與實行
        </RouterLink>
        <RouterLink to="/tian/tang" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          唐︰均田制發展與兩稅法
        </RouterLink>
        <RouterLink to="/tian/song" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          宋︰地主經濟與田稅
        </RouterLink>
        <RouterLink to="/tian/yuan" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          元︰軍戶、屯田與土地管理
        </RouterLink>
        <RouterLink to="/tian/ming" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          明︰土地登記與田賦改革
        </RouterLink>
        <RouterLink to="/tian/qing" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          清︰地丁合一與土地負擔
        </RouterLink>
        <RouterLink to="/tian/summary" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          田制小結與比較
        </RouterLink>
      </div>

      <div class="nav-group">
        <div class="nav-group-title">兵制專題</div>
        <div class="nav-group-description">由貴族軍隊、徵兵、府兵到募兵與衛所制</div>
        <RouterLink to="/bing/overview" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          兵制整體概覽
        </RouterLink>
        <RouterLink to="/bing/pre-qin" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          先秦︰貴族軍隊與民兵
        </RouterLink>
        <RouterLink to="/bing/qin-han" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          秦漢︰徵兵制與初步募兵
        </RouterLink>
        <RouterLink to="/bing/wei-jin" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          魏晉南北朝︰世兵制與胡漢雜糅
        </RouterLink>
        <RouterLink to="/bing/sui" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          隋︰府兵制的承接與嘗試
        </RouterLink>
        <RouterLink to="/bing/tang" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          唐︰府兵制發展與藩鎮化
        </RouterLink>
        <RouterLink to="/bing/song" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          宋︰募兵為主的禁軍體系
        </RouterLink>
        <RouterLink to="/bing/yuan" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          元︰軍戶與千戶、萬戶制
        </RouterLink>
        <RouterLink to="/bing/ming" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          明︰衛所制與募兵並行
        </RouterLink>
        <RouterLink to="/bing/qing" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          清︰八旗、綠營與新軍
        </RouterLink>
        <RouterLink to="/bing/summary" class="nav-link" active-class="nav-link-active" @click="closeMenu">
          兵制小結與比較
        </RouterLink>
      </div>
    </nav>

    <!-- 遮罩层 -->
    <div class="overlay" :class="{ 'open': menuOpen }" @click="closeMenu"></div>

    <main class="layout-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>
