<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/" class="logo-link">
          <img src="/images/healingman.png" alt="Life Coach Logo" class="logo-image" />
        </NuxtLink>
      </div>
      
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <NuxtLink to="/business" class="nav-link">服务</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/about-us" class="nav-link">愿景</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #42b883 0%, #3aa876 100%);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo-link {
  display: block;
  text-decoration: none;
  height: 300%;
  display: flex;
  align-items: center;
}

.logo-image {
  height: 100%;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  font-size: 1.43rem;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 1rem;
    padding: 15px 20px;
    height: auto;
  }
  
  .logo {
    height: 60px;
  }
  
  .nav-list {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-link {
    padding: 8px 12px;
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .nav-list {
    gap: 0.5rem;
  }
  
  .nav-link {
    padding: 6px 10px;
    font-size: 1.17rem;
  }
  
  .logo {
    height: 50px;
  }
}
</style>