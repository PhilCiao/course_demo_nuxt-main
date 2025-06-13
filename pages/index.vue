<template>
  <div class="container">
    <div class="hero">
      <div class="hero-content">
        <div class="language-switch">
          <button 
            class="lang-btn" 
            :class="{ active: currentLang === 'zh' }"
            @click="currentLang = 'zh'"
          >中文</button>
          <button 
            class="lang-btn" 
            :class="{ active: currentLang === 'en' }"
            @click="currentLang = 'en'"
          >English</button>
        </div>
        
        <div class="hero-text">
          <h1>{{ t.hero.title }}</h1>
          <p class="subtitle">{{ t.hero.subtitle }}</p>
        </div>

        <div class="hero-actions">
          <div class="action-wrapper">
            <NuxtLink to="/business" class="business-link">{{ t.hero.businessLink }}</NuxtLink>
            <div class="bell-icon" @click="ringBell">
              🔔
              <div class="bell-ripple"></div>
            </div>
          </div>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">{{ t.stats.clients }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">98%</span>
            <span class="stat-label">{{ t.stats.success }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span class="stat-label">{{ t.stats.experience }}</span>
          </div>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </div>

    <div class="services">
      <div class="service-card">
        <div class="service-icon">🌱</div>
        <h2>{{ t.services.growth.title }}</h2>
        <p>{{ t.services.growth.description }}</p>
      </div>
      <div class="service-card">
        <div class="service-icon">💼</div>
        <h2>{{ t.services.career.title }}</h2>
        <p>{{ t.services.career.description }}</p>
      </div>
      <div class="service-card">
        <div class="service-icon">❤️</div>
        <h2>{{ t.services.relationships.title }}</h2>
        <p>{{ t.services.relationships.description }}</p>
      </div>
    </div>

    <div class="cta-section">
      <p class="intro">{{ t.cta.intro }}</p>
      <button class="cta-button">{{ t.cta.button }}</button>
    </div>

    <div class="customer-service">
      <div class="cs-card">
        <div class="cs-icon">💬</div>
        <h3>{{ t.support.chat.title }}</h3>
        <p>{{ t.support.chat.description }}</p>
        <button class="cs-button">{{ t.support.chat.button }}</button>
      </div>
      <div class="cs-card">
        <div class="cs-icon">📞</div>
        <h3>{{ t.support.phone.title }}</h3>
        <p>{{ t.support.phone.description }}</p>
        <button class="cs-button">{{ t.support.phone.button }}</button>
      </div>
      <div class="cs-card">
        <div class="cs-icon">✉️</div>
        <h3>{{ t.support.email.title }}</h3>
        <p>{{ t.support.email.description }}</p>
        <button class="cs-button">{{ t.support.email.button }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentLang = ref('zh')
const isRinging = ref(false)

const ringBell = () => {
  isRinging.value = true
  setTimeout(() => {
    isRinging.value = false
  }, 1000)
}

const translations = {
  zh: {
    hero: {
      title: '立即开启您的人生蜕变之旅',
      subtitle: '专业人生教练 | 个人成长导师 | 职业发展顾问',
      businessLink: '了解我的服务'
    },
    stats: {
      clients: '服务客户',
      success: '成功率',
      experience: '年经验'
    },
    services: {
      growth: {
        title: '个人成长',
        description: '突破自我限制，发现内在潜能，实现个人价值'
      },
      career: {
        title: '职业发展',
        description: '明确职业方向，提升职场竞争力，实现职业理想'
      },
      relationships: {
        title: '亲密关系',
        description: '建立健康关系，提升沟通能力，创造幸福生活'
      }
    },
    cta: {
      intro: '无论您面临什么挑战，我都能帮助您找到答案，实现突破',
      button: '预约免费咨询'
    },
    support: {
      chat: {
        title: '在线咨询',
        description: '24小时在线支持',
        button: '开始对话'
      },
      phone: {
        title: '电话支持',
        description: '+86 1234567890',
        button: '立即拨打'
      },
      email: {
        title: '邮件支持',
        description: 'phil@healingman.vip',
        button: '发送邮件'
      }
    }
  },
  en: {
    hero: {
      title: 'Transform Your Life Journey',
      subtitle: 'Professional Life Coach | Personal Growth Mentor | Career Development Consultant',
      businessLink: 'Explore My Services'
    },
    stats: {
      clients: 'Clients Served',
      success: 'Success Rate',
      experience: 'Years Experience'
    },
    services: {
      growth: {
        title: 'Personal Growth',
        description: 'Break through limitations, discover your potential, achieve personal value'
      },
      career: {
        title: 'Career Development',
        description: 'Clarify career direction, enhance workplace competitiveness, realize career ideals'
      },
      relationships: {
        title: 'Relationships',
        description: 'Build healthy relationships, improve communication, create a happy life'
      }
    },
    cta: {
      intro: 'Whatever challenges you face, I can help you find answers and achieve breakthroughs',
      button: 'Book Free Consultation'
    },
    support: {
      chat: {
        title: 'Live Chat',
        description: '24/7 Online Support',
        button: 'Start Chat'
      },
      phone: {
        title: 'Phone Support',
        description: '+86 1234567890',
        button: 'Call Now'
      },
      email: {
        title: 'Email Support',
        description: 'phil@healingman.vip',
        button: 'Send Email'
      }
    }
  }
}

const t = computed(() => translations[currentLang.value])
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.hero {
  position: relative;
  background: linear-gradient(135deg, #f0f9f4 0%, #e6f4ea 100%);
  border-radius: 24px;
  padding: 4rem 2rem;
  overflow: hidden;
  margin-bottom: 4rem;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.1) 0%, rgba(58, 168, 118, 0.1) 100%);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.language-switch {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(66, 184, 131, 0.2);
  padding: 0.5rem 1.2rem;
  margin-left: 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  color: #2c3e50;
}

.lang-btn.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.2);
}

.hero-text {
  text-align: center;
  margin-bottom: 3rem;
}

h1 {
  color: #2c3e50;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  background: linear-gradient(135deg, #2c3e50 0%, #42b883 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: #666;
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.hero-actions {
  margin: 3rem 0;
  text-align: center;
}

.action-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.business-link {
  display: inline-block;
  background: linear-gradient(135deg, #42b883 0%, #3aa876 100%);
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
  position: relative;
  overflow: hidden;
  animation: pulse 2s infinite;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.business-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  animation: shine 2s infinite;
}

.business-link::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 70%
  );
  animation: rotate 4s linear infinite;
}

.business-link:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(66, 184, 131, 0.4);
  background: #3aa876;
  animation: none;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(66, 184, 131, 0.6);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(66, 184, 131, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(66, 184, 131, 0);
  }
}

@keyframes shine {
  0% {
    left: -100%;
  }
  20% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(66, 184, 131, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.8rem;
  font-weight: 800;
  color: #42b883;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #42b883 0%, #3aa876 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: #666;
  font-size: 1.1rem;
  font-weight: 500;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

.service-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

.cta-section {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #42b883 0%, #3aa876 100%);
  border-radius: 16px;
  margin-bottom: 4rem;
}

.intro {
  font-size: 1.4rem;
  color: white;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: white;
  color: #42b883;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.customer-service {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.cs-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.cs-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

.cs-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cs-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.cs-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.cs-button {
  background: #f8f9fa;
  color: #2c3e50;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.cs-button:hover {
  background: #42b883;
  color: white;
}

.bell-icon {
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  animation: bellShake 2s infinite;
  user-select: none;
}

.bell-icon:hover {
  animation: bellShake 0.5s infinite;
}

.bell-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(66, 184, 131, 0.2);
  animation: ripple 2s infinite;
}

@keyframes bellShake {
  0% {
    transform: rotate(0);
  }
  1% {
    transform: rotate(30deg);
  }
  3% {
    transform: rotate(-28deg);
  }
  5% {
    transform: rotate(34deg);
  }
  7% {
    transform: rotate(-32deg);
  }
  9% {
    transform: rotate(30deg);
  }
  11% {
    transform: rotate(-28deg);
  }
  13% {
    transform: rotate(26deg);
  }
  15% {
    transform: rotate(-24deg);
  }
  17% {
    transform: rotate(22deg);
  }
  19% {
    transform: rotate(-20deg);
  }
  21% {
    transform: rotate(18deg);
  }
  23% {
    transform: rotate(-16deg);
  }
  25% {
    transform: rotate(14deg);
  }
  27% {
    transform: rotate(-12deg);
  }
  29% {
    transform: rotate(10deg);
  }
  31% {
    transform: rotate(-8deg);
  }
  33% {
    transform: rotate(6deg);
  }
  35% {
    transform: rotate(-4deg);
  }
  37% {
    transform: rotate(2deg);
  }
  39% {
    transform: rotate(-1deg);
  }
  41% {
    transform: rotate(1deg);
  }
  43% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}

@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1.5rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 2rem;
  }

  .circle-1, .circle-2, .circle-3 {
    opacity: 0.5;
  }
}
</style>

