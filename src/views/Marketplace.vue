<script setup>
import { ref } from 'vue'

const categories = [
  'Medications',
  'Medical Equipment',
  'Mobility Aids',
  'Health Monitors',
  'Daily Living Aids'
]

const products = ref([
  {
    id: 1,
    name: 'Digital Blood Pressure Monitor',
    category: 'Health Monitors',
    price: 49.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Adjustable Walking Cane',
    category: 'Mobility Aids',
    price: 29.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
])

const selectedCategory = ref('')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Medical Supplies & Equipment</h1>
    
    <!-- Search and Filter Section -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <label for="search" class="block text-lg font-medium text-gray-700 mb-2">
            Search Products
          </label>
          <input
            type="text"
            id="search"
            class="input"
            placeholder="Enter product name"
          >
        </div>
        <div>
          <label for="category" class="block text-lg font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            v-model="selectedCategory"
            class="input"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900">{{ product.name }}</h3>
          <p class="text-gray-600">{{ product.category }}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-lg font-medium text-primary-600">${{ product.price }}</span>
            <span class="text-sm font-medium text-gray-600">★ {{ product.rating }}/5</span>
          </div>
          <button class="btn btn-primary w-full mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>