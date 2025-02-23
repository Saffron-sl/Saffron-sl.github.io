<script setup>
import { ref } from 'vue'

const topics = [
  {
    id: 1,
    title: 'Tips for Managing Diabetes',
    author: 'Mary Johnson',
    replies: 23,
    lastActivity: '2 hours ago',
    category: 'Health Tips'
  },
  {
    id: 2,
    title: 'Local Senior Book Club',
    author: 'Robert Smith',
    replies: 15,
    lastActivity: '1 day ago',
    category: 'Social Activities'
  }
]

const categories = [
  'Health Tips',
  'Social Activities',
  'Support Groups',
  'Local Events',
  'General Discussion'
]

const selectedCategory = ref('')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Community Forum</h1>

    <!-- Search and Filter -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <label for="search" class="block text-lg font-medium text-gray-700 mb-2">
            Search Topics
          </label>
          <input
            type="text"
            id="search"
            class="input"
            placeholder="Search discussions..."
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

    <!-- New Topic Button -->
    <div class="mb-8">
      <button class="btn btn-primary">
        Start New Discussion
      </button>
    </div>

    <!-- Topics List -->
    <div class="space-y-4">
      <div
        v-for="topic in topics"
        :key="topic.id"
        class="bg-white rounded-lg shadow-sm p-6"
      >
        <div class="flex items-start justify-between">
          <div>
            <h3 class="text-xl font-semibold text-gray-900">{{ topic.title }}</h3>
            <p class="text-gray-600 mt-1">Started by {{ topic.author }}</p>
          </div>
          <span class="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            {{ topic.category }}
          </span>
        </div>
        <div class="mt-4 flex items-center text-sm text-gray-500">
          <span>{{ topic.replies }} replies</span>
          <span class="mx-2">•</span>
          <span>Last activity {{ topic.lastActivity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>