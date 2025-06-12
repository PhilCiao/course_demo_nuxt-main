<template>
  <div class="business-container">
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

    <div class="page-header">
      <h1>{{ t.header.title }}</h1>
      <p class="subtitle">{{ t.header.subtitle }}</p>
    </div>

    <div class="services-grid">
      <div class="service-section" id="relationships">
        <div class="service-header">
          <div class="service-icon">❤️</div>
          <h2>{{ t.relationships.title }}</h2>
        </div>
        <div class="service-content">
          <div class="service-description">
            <p>{{ t.relationships.description }}</p>
          </div>
          <div class="service-features">
            <h3>{{ t.relationships.featuresTitle }}</h3>
            <ul>
              <li v-for="(feature, index) in t.relationships.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="service-cta">
            <button class="cta-button">{{ t.relationships.cta }}</button>
          </div>
        </div>
      </div>

      <div class="service-section" id="career">
        <div class="service-header">
          <div class="service-icon">💼</div>
          <h2>{{ t.career.title }}</h2>
        </div>
        <div class="service-content">
          <div class="service-description">
            <p>{{ t.career.description }}</p>
          </div>
          <div class="service-features">
            <h3>{{ t.career.featuresTitle }}</h3>
            <ul>
              <li v-for="(feature, index) in t.career.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="service-cta">
            <button class="cta-button">{{ t.career.cta }}</button>
          </div>
        </div>
      </div>

      <div class="service-section" id="growth">
        <div class="service-header">
          <div class="service-icon">🌱</div>
          <h2>{{ t.growth.title }}</h2>
        </div>
        <div class="service-content">
          <div class="service-description">
            <p>{{ t.growth.description }}</p>
          </div>
          <div class="service-features">
            <h3>{{ t.growth.featuresTitle }}</h3>
            <ul>
              <li v-for="(feature, index) in t.growth.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="service-cta">
            <button class="cta-button">{{ t.growth.cta }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentLang = ref('zh')

const translations = {
  zh: {
    header: {
      title: '专业服务',
      subtitle: '为您提供全方位的个人成长解决方案'
    },
    relationships: {
      title: '亲密关系指导',
      description: '帮助您建立和维护健康、持久的亲密关系，提升沟通能力，创造幸福生活。',
      featuresTitle: '服务内容',
      features: [
        '关系评估与诊断',
        '沟通技巧提升',
        '情感管理指导',
        '关系修复与重建',
        '长期关系维护策略'
      ],
      cta: '预约关系咨询'
    },
    career: {
      title: '职业发展咨询',
      description: '协助您明确职业方向，提升职场竞争力，实现职业理想。',
      featuresTitle: '服务内容',
      features: [
        '职业规划与定位',
        '简历优化与面试指导',
        '职场技能提升',
        '领导力发展',
        '职业转型指导'
      ],
      cta: '预约职业咨询'
    },
    growth: {
      title: '个人成长教练',
      description: '帮助您突破自我限制，发现内在潜能，实现个人价值。',
      featuresTitle: '服务内容',
      features: [
        '个人潜能开发',
        '目标设定与实现',
        '时间管理优化',
        '压力管理与平衡',
        '自我认知提升'
      ],
      cta: '预约成长咨询'
    }
  },
  en: {
    header: {
      title: 'Professional Services',
      subtitle: 'Comprehensive Personal Growth Solutions'
    },
    relationships: {
      title: 'Relationship Coaching',
      description: 'Help you build and maintain healthy, lasting relationships, improve communication skills, and create a happy life.',
      featuresTitle: 'Services Include',
      features: [
        'Relationship Assessment',
        'Communication Skills Enhancement',
        'Emotional Management',
        'Relationship Repair',
        'Long-term Relationship Maintenance'
      ],
      cta: 'Book Relationship Consultation'
    },
    career: {
      title: 'Career Development',
      description: 'Assist you in clarifying career direction, enhancing workplace competitiveness, and achieving career goals.',
      featuresTitle: 'Services Include',
      features: [
        'Career Planning & Positioning',
        'Resume & Interview Coaching',
        'Professional Skills Enhancement',
        'Leadership Development',
        'Career Transition Guidance'
      ],
      cta: 'Book Career Consultation'
    },
    growth: {
      title: 'Personal Growth Coaching',
      description: 'Help you break through limitations, discover your potential, and achieve personal value.',
      featuresTitle: 'Services Include',
      features: [
        'Personal Potential Development',
        'Goal Setting & Achievement',
        'Time Management Optimization',
        'Stress Management & Balance',
        'Self-awareness Enhancement'
      ],
      cta: 'Book Growth Consultation'
    }
  }
}

const t = computed(() => translations[currentLang.value])
</script>

<style scoped>
.business-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.language-switch {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}

.lang-btn {
  background: none;
  border: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-btn.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
}

.services-grid {
  display: grid;
  gap: 3rem;
}

.service-section {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.service-section:hover {
  transform: translateY(-5px);
}

.service-header {
  background: linear-gradient(135deg, #42b883 0%, #3aa876 100%);
  padding: 2rem;
  color: white;
  text-align: center;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-header h2 {
  font-size: 1.8rem;
  margin: 0;
}

.service-content {
  padding: 2rem;
}

.service-description {
  margin-bottom: 2rem;
  color: #666;
  line-height: 1.6;
}

.service-features {
  margin-bottom: 2rem;
}

.service-features h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.service-features ul {
  list-style: none;
  padding: 0;
}

.service-features li {
  padding: 0.5rem 0;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: "✓";
  color: #42b883;
  position: absolute;
  left: 0;
}

.service-cta {
  text-align: center;
}

.cta-button {
  background: #42b883;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #3aa876;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }
  
  .service-header {
    padding: 1.5rem;
  }
  
  .service-content {
    padding: 1.5rem;
  }
}
</style> 