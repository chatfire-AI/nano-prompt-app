<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="container header-content">
        <div class="logo">Nano <span>Banana</span> Pro</div>
        
        <div class="search-wrapper">
          <div class="search-bar">
            <span class="search-icon">🔍</span>
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="搜索提示词、作者..."
            />
          </div>
        </div>
        
        <div class="header-actions">
          <button 
            class="history-btn"
            @click="showHistoryModal = true"
            v-if="imageHistory.length > 0"
          >
            <span class="hide-mobile">历史记录</span>
          </button>
          <button 
            class="api-key-btn" 
            :class="{ 'has-key': hasApiKey }"
            @click="showApiKeyModal = true"
          >
            <span class="hide-mobile">{{ hasApiKey ? 'API Key 已设置' : '设置 API Key' }}</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Generation Area (above filters) -->
    <section class="generation-section" v-if="selectedPrompt && !showDetailModal">
      <div class="container">
        <div class="generation-panel">
          <div class="generation-header">
            <div class="generation-title">
              <span class="generation-badge">做同款</span>
              <h3>{{ selectedPrompt.title }}</h3>
            </div>
            <button class="close-generation" @click="clearSelectedPrompt">×</button>
          </div>
          
          <div class="generation-content">
            <!-- Left: Image upload (always available, up to 5 images) -->
            <div class="generation-left">
              <div class="prompt-label">上传参考图片（可选，最多5张）</div>
              <div class="image-upload-flex">
                <!-- 已上传的图片 -->
                <div 
                  v-for="(img, index) in uploadedImages.filter(i => i)"
                  :key="'img-' + index"
                  class="image-upload-item has-image"
                >
                  <img :src="img" :alt="'参考图' + (index + 1)" />
                  <button class="remove-image" @click.stop="removeImageByValue(img)">×</button>
                </div>
                <!-- 添加按钮 -->
                <div 
                  v-if="uploadedImages.filter(i => i).length < 5"
                  class="image-upload-item add-btn"
                  @click="triggerUpload()"
                >
                  <div class="add-icon">+</div>
                  <div class="upload-text">添加图片</div>
                </div>
              </div>
              <input 
                type="file" 
                ref="fileInput" 
                style="display: none" 
                accept="image/*"
                @change="handleFileUpload"
              />
            </div>
            
            <!-- Right: Prompt and generate -->
            <div class="generation-right">
              <div class="prompt-edit-section">
                <div class="prompt-label">编辑提示词</div>
                <textarea v-model="editablePrompt" placeholder="输入或编辑提示词..."></textarea>
              </div>
              
              <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
              
              <div class="loading-spinner" v-if="isGenerating">
                <div class="spinner"></div>
                <div class="loading-text">正在生成图片，请稍候...</div>
              </div>
              
              <div class="result-section" v-if="generatedImage">
                <div class="prompt-label">生成结果</div>
                <div class="result-image-wrapper">
                  <img :src="generatedImage" alt="生成的图片" class="result-image-thumb" @click="previewImage = generatedImage" />
                  <div class="result-actions">
                    <button class="btn btn-secondary btn-small" @click="previewImage = generatedImage">🔍 查看大图</button>
                    <button class="btn btn-primary btn-small" @click="downloadImage">💾 下载图片</button>
                  </div>
                </div>
              </div>
              
              <div class="generation-actions">
                <button 
                  class="btn btn-primary btn-generate" 
                  @click="generateImage"
                  :disabled="isGenerating || !hasApiKey"
                >
                  {{ isGenerating ? '生成中...' : '🚀 开始生成' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tags -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-tags">
          <button 
            v-for="cat in categories" 
            :key="cat.id"
            class="filter-tag"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Cards Grid -->
    <section class="cards-section">
      <div class="container">
        <div class="cards-grid" v-if="filteredPrompts.length > 0">
          <div 
            v-for="item in filteredPrompts" 
            :key="item.id"
            class="card"
            @click="openPromptDetail(item)"
          >
            <div class="card-image">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ item.title }}</h3>
              <div class="card-meta">
                <span class="card-category" :class="{ highlight: item.needsImage }">
                  {{ item.categoryLabel }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="empty-state" v-else>
          <div class="empty-icon">🔍</div>
          <p>没有找到匹配的提示词</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-credits">
            <p>素材来源</p>
            <div class="footer-links">
              <a href="https://glidea.github.io/banana-prompt-quicker/#" target="_blank">Banana Prompt Quicker</a>
              <a href="https://mp.weixin.qq.com/s/lrYNbs4rGs3KOqewoZ6aNQ" target="_blank">微信公众号文章</a>
            </div>
          </div>
          <div class="footer-qrcodes">
            <div class="qrcode-item">
              <img :src="developerGroupQR" alt="开发者群" />
              <p>开发者群</p>
            </div>
            <div class="qrcode-item">
              <img :src="customerServiceQR" alt="开发者&客服" />
              <p>开发者&客服</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <p>© 2024 Nano Banana Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- API Key Modal -->
    <div class="modal-overlay" v-if="showApiKeyModal" @click.self="showApiKeyModal = false">
      <div class="modal api-key-modal">
        <div class="modal-header">
          <h3>设置 API Key</h3>
          <button class="modal-close" @click="showApiKeyModal = false">×</button>
        </div>
        <div class="modal-body">
          <div class="api-key-register">
            <p>还没有 API Key？</p>
            <a href="https://api.chatfire.site/login?inviteCode=B466100C" target="_blank" class="register-link">
              👉 点击这里注册获取密钥
            </a>
            <p class="register-hint">注册登录后即可获取密钥，复制粘贴到下方即可使用</p>
          </div>
          <input 
            type="password"
            class="api-key-input"
            v-model="apiKeyInput"
            placeholder="请输入您的 API Key"
          />
          <p class="api-key-hint">
            API Key 将保存在本地浏览器中，不会上传到服务器
          </p>
          <div class="prompt-actions">
            <button class="btn btn-secondary" @click="showApiKeyModal = false">取消</button>
            <button class="btn btn-primary" @click="saveApiKey">保存</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Prompt Detail Modal -->
    <div class="modal-overlay" v-if="showDetailModal" @click.self="closeDetailModal">
      <div class="modal">
        <div class="modal-header">
          <h3>{{ selectedPrompt?.title }}</h3>
          <button class="modal-close" @click="closeDetailModal">×</button>
        </div>
        <div class="modal-body">
          <img :src="selectedPrompt?.image" :alt="selectedPrompt?.title" class="modal-image" />
          
          <div class="prompt-section">
            <div class="prompt-label">提示词</div>
            <div class="prompt-text">{{ selectedPrompt?.prompt }}</div>
          </div>
          
          <div class="prompt-actions">
            <button class="btn btn-secondary" @click="copyPrompt">📋 复制提示词</button>
            <button class="btn btn-primary" @click="startGeneration">🎨 做同款</button>
          </div>
        </div>
      </div>
    </div>

    <!-- History Modal -->
    <div class="modal-overlay" v-if="showHistoryModal" @click.self="showHistoryModal = false">
      <div class="modal history-modal">
        <div class="modal-header">
          <h3>生成历史记录</h3>
          <button class="modal-close" @click="showHistoryModal = false">×</button>
        </div>
        <div class="modal-body">
          <div class="history-grid" v-if="imageHistory.length > 0">
            <div 
              v-for="(item, index) in imageHistory" 
              :key="index"
              class="history-item"
            >
              <img :src="item.image" :alt="item.title" @click="viewHistoryImage(item)" />
              <div class="history-item-info">
                <p class="history-title">{{ item.title }}</p>
                <p class="history-time">{{ formatTime(item.timestamp) }}</p>
              </div>
              <button class="history-delete" @click="deleteHistoryItem(index)">🗑️</button>
            </div>
          </div>
          <div class="empty-state" v-else>
            <p>暂无生成记录</p>
          </div>
          <div class="prompt-actions" v-if="imageHistory.length > 0">
            <button class="btn btn-secondary" @click="clearHistory">清空历史</button>
            <button class="btn btn-primary" @click="showHistoryModal = false">关闭</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Preview Modal -->
    <div class="modal-overlay" v-if="previewImage" @click.self="previewImage = null">
      <div class="modal preview-modal">
        <div class="modal-header">
          <h3>图片预览</h3>
          <button class="modal-close" @click="previewImage = null">×</button>
        </div>
        <div class="modal-body">
          <img :src="previewImage" alt="预览图片" class="preview-image" />
        </div>
      </div>
    </div>

    <!-- Toast -->
    <div class="toast" v-if="toastMessage">{{ toastMessage }}</div>
  </div>
</template>

<script>
import { categories, prompts } from './data/prompts.js'
import developerGroupQR from './assets/qrcode/developer-group.png'
import customerServiceQR from './assets/qrcode/customer-service.png'

export default {
  name: 'App',
  data() {
    return {
      categories,
      prompts,
      searchQuery: '',
      activeCategory: 'all',
      apiKey: '',
      apiKeyInput: '',
      showApiKeyModal: false,
      showDetailModal: false,
      showHistoryModal: false,
      selectedPrompt: null,
      editablePrompt: '',
      uploadedImages: ['', '', '', '', ''],
      isGenerating: false,
      generatedImage: '',
      errorMessage: '',
      toastMessage: '',
      imageHistory: [],
      previewImage: null,
      developerGroupQR,
      customerServiceQR
    }
  },
  computed: {
    hasApiKey() {
      return !!this.apiKey
    },
    filteredPrompts() {
      let result = this.prompts
      
      if (this.activeCategory !== 'all') {
        result = result.filter(p => p.category === this.activeCategory)
      }
      
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase()
        result = result.filter(p => 
          p.title.toLowerCase().includes(query) ||
          p.prompt.toLowerCase().includes(query) ||
          p.prompt.includes(query) ||
          p.categoryLabel.includes(query)
        )
      }
      
      return result
    }
  },
  mounted() {
    const savedKey = localStorage.getItem('nano-banana-api-key')
    if (savedKey) {
      this.apiKey = savedKey
    }
    this.loadImageHistory()
  },
  methods: {
    saveApiKey() {
      if (this.apiKeyInput.trim()) {
        this.apiKey = this.apiKeyInput.trim()
        localStorage.setItem('nano-banana-api-key', this.apiKey)
        this.showToast('API Key 已保存')
      }
      this.showApiKeyModal = false
    },
    openPromptDetail(prompt) {
      this.selectedPrompt = prompt
      this.showDetailModal = true
    },
    closeDetailModal() {
      this.showDetailModal = false
    },
    clearSelectedPrompt() {
      this.selectedPrompt = null
      this.editablePrompt = ''
      this.uploadedImages = ['', '', '', '', '']
      this.generatedImage = ''
      this.errorMessage = ''
    },
    copyPrompt() {
      if (this.selectedPrompt) {
        navigator.clipboard.writeText(this.selectedPrompt.prompt)
          .then(() => this.showToast('提示词已复制到剪贴板'))
          .catch(() => this.showToast('复制失败，请手动复制'))
      }
    },
    startGeneration() {
      if (!this.hasApiKey) {
        this.showToast('请先设置 API Key')
        this.showApiKeyModal = true
        return
      }
      this.editablePrompt = this.selectedPrompt?.prompt || ''
      this.uploadedImages = ['', '', '', '', '']
      this.generatedImage = ''
      this.errorMessage = ''
      this.showDetailModal = false
      this.$nextTick(() => {
        const generationSection = document.querySelector('.generation-section')
        if (generationSection) {
          generationSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    },
    removeImageByValue(img) {
      const index = this.uploadedImages.indexOf(img)
      if (index > -1) {
        this.uploadedImages[index] = ''
      }
    },
    triggerUpload() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          // 找到第一个空位置
          const emptyIndex = this.uploadedImages.findIndex(img => !img)
          if (emptyIndex > -1) {
            this.uploadedImages[emptyIndex] = e.target.result
          }
        }
        reader.readAsDataURL(file)
      }
      event.target.value = ''
    },
    async generateImage() {
      if (!this.hasApiKey) {
        this.showToast('请先设置 API Key')
        return
      }
      
      if (!this.editablePrompt.trim()) {
        this.errorMessage = '请输入提示词'
        return
      }
      
      this.isGenerating = true
      this.errorMessage = ''
      this.generatedImage = ''
      
      try {
        const requestBody = {
          model: 'nano-banana-pro',
          prompt: this.editablePrompt
        }
        
        const images = this.uploadedImages.filter(img => img)
        if (images.length > 0) {
          requestBody.image = images
        }
        
        const response = await fetch('https://api.chatfire.site/v1/images/generations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          },
          body: JSON.stringify(requestBody)
        })
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error?.message || `请求失败: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (data.data && data.data[0]) {
          this.generatedImage = data.data[0].url || data.data[0].b64_json
          if (data.data[0].b64_json) {
            this.generatedImage = `data:image/png;base64,${data.data[0].b64_json}`
          }
          this.saveToHistory()
          this.showToast('图片生成成功！')
        } else {
          throw new Error('未能获取生成的图片')
        }
      } catch (error) {
        this.errorMessage = error.message || '生成失败，请稍后重试'
      } finally {
        this.isGenerating = false
      }
    },
    loadImageHistory() {
      try {
        const history = localStorage.getItem('nano-banana-history')
        if (history) {
          this.imageHistory = JSON.parse(history)
        }
      } catch (e) {
        this.imageHistory = []
      }
    },
    saveToHistory() {
      if (!this.generatedImage || !this.selectedPrompt) return
      
      const historyItem = {
        title: this.selectedPrompt.title,
        prompt: this.editablePrompt,
        image: this.generatedImage,
        timestamp: Date.now()
      }
      
      this.imageHistory.unshift(historyItem)
      if (this.imageHistory.length > 50) {
        this.imageHistory = this.imageHistory.slice(0, 50)
      }
      
      try {
        localStorage.setItem('nano-banana-history', JSON.stringify(this.imageHistory))
      } catch (e) {
        if (this.imageHistory.length > 10) {
          this.imageHistory = this.imageHistory.slice(0, 10)
          localStorage.setItem('nano-banana-history', JSON.stringify(this.imageHistory))
        }
      }
    },
    deleteHistoryItem(index) {
      this.imageHistory.splice(index, 1)
      localStorage.setItem('nano-banana-history', JSON.stringify(this.imageHistory))
      this.showToast('已删除')
    },
    clearHistory() {
      if (confirm('确定要清空所有历史记录吗？')) {
        this.imageHistory = []
        localStorage.removeItem('nano-banana-history')
        this.showToast('历史记录已清空')
      }
    },
    viewHistoryImage(item) {
      this.previewImage = item.image
    },
    formatTime(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleString('zh-CN', {
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    },
    showToast(message) {
      this.toastMessage = message
      setTimeout(() => {
        this.toastMessage = ''
      }, 2000)
    },
    downloadImage() {
      if (!this.generatedImage) return
      
      const link = document.createElement('a')
      link.href = this.generatedImage
      link.download = `nano-banana-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      this.showToast('图片下载中...')
    }
  }
}
</script>
