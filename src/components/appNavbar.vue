<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'HomePage' }" class="navbar-item">
        <img src="https://www.dogrumimarlikinsaat.com/img/dmLogo.png" width="30" />
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <strong class="navbar-item"> VueJs Crud API </strong>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link :to="{ name: 'Create' }" class="button is-dark">
              <strong>Yeni Ekle</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
