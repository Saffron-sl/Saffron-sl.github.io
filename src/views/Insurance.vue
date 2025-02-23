<script setup>
import { ref } from 'vue'

const insuranceTypes = [
  'Medicare Advantage',
  'Medicare Supplement',
  'Long-term Care',
  'Dental & Vision',
  'Prescription Drug Plans'
]

const plans = ref([
  {
    id: 1,
    name: 'Senior Care Plus',
    type: 'Medicare Advantage',
    provider: 'HealthFirst',
    monthlyPremium: 0,
    rating: 4.5,
    features: [
      'No monthly premium',
      'Includes prescription drug coverage',
      'Dental and vision benefits',
      'Fitness program membership'
    ]
  },
  {
    id: 2,
    name: 'Complete Coverage Plan',
    type: 'Medicare Supplement',
    provider: 'SecureHealth',
    monthlyPremium: 135,
    rating: 4.8,
    features: [
      'Comprehensive coverage',
      'No network restrictions',
      'Guaranteed renewable',
      'Travel coverage included'
    ]
  }
])

const selectedType = ref('')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Insurance Plans</h1>
    
    <!-- Search and Filter Section -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <label for="search" class="block text-lg font-medium text-gray-700 mb-2">
            Search Plans
          </label>
          <input
            type="text"
            id="search"
            class="input"
            placeholder="Search by plan name or provider"
          >
        </div>
        <div>
          <label for="type" class="block text-lg font-medium text-gray-700 mb-2">
            Insurance Type
          </label>
          <select
            id="type"
            v-model="selectedType"
            class="input"
          >
            <option value="">All Types</option>
            <option v-for="type in insuranceTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Insurance Plans Grid -->
    <div class="grid gap-6 lg:grid-cols-2">
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div class="p-6">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-xl font-semibold text-gray-900">{{ plan.name }}</h3>
              <p class="text-gray-600">by {{ plan.provider }}</p>
            </div>
            <span class="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              {{ plan.type }}
            </span>
          </div>
          
          <div class="mt-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-lg font-medium text-primary-600">
                ${{ plan.monthlyPremium }}/month
              </span>
              <span class="text-sm font-medium text-gray-600">★ {{ plan.rating }}/5</span>
            </div>
            
            <h4 class="font-medium text-gray-900 mb-2">Key Features:</h4>
            <ul class="space-y-2">
              <li
                v-for="feature in plan.features"
                :key="feature"
                class="flex items-start"
              >
                <span class="text-primary-600 mr-2">✓</span>
                <span class="text-gray-600">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-6 space-y-3">
            <button class="btn btn-primary w-full">
              Get a Quote
            </button>
            <button class="btn btn-secondary w-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>