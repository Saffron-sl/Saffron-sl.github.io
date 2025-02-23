<script setup>
import { ref } from 'vue'

const services = [
  { name: 'Insurance', description: 'Find the best insurance plans for seniors.' },
  { name: 'Home Improvements', description: 'Get help with home modifications and safety upgrades.' },
  { name: 'Commute', description: 'Find transport solutions and accessible ride-sharing options.' },
  { name: 'Gardening', description: 'Hire gardening experts for home landscaping and maintenance.' },
  { name: 'Legal', description: 'Access legal advice and services for senior needs.' }
]

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

const selectedService = ref('')
const selectedInsuranceType = ref('')
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-center text-gray-900 mb-6">Our Services</h1>

    <!-- Service Selection -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <label for="service" class="block text-lg font-semibold mb-2 text-gray-700">
        Select a Service:
      </label>
      <select v-model="selectedService" class="w-full p-3 border rounded-lg">
        <option disabled value="">-- Choose a Service --</option>
        <option v-for="service in services" :key="service.name" :value="service.name">
          {{ service.name }}
        </option>
      </select>
    </div>

    <!-- Service Description -->
    <div v-if="selectedService" class="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-blue-500">{{ selectedService }}</h2>
      <p class="mt-2 text-gray-700">
        {{
          services.find(service => service.name === selectedService)?.description
        }}
      </p>
    </div>

    <!-- Insurance Selection (Only when "Insurance" is chosen) -->
    <div v-if="selectedService === 'Insurance'" class="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold text-gray-700">Choose Insurance Type:</h3>
      <select v-model="selectedInsuranceType" class="w-full p-3 border rounded-lg mt-2">
        <option disabled value="">-- Select Insurance Type --</option>
        <option v-for="type in insuranceTypes" :key="type" :value="type">
          {{ type }}
        </option>
      </select>
    </div>

    <!-- Insurance Plans (Only if Insurance Type is selected) -->
    <div v-if="selectedInsuranceType" class="mt-6">
      <h3 class="text-xl font-semibold text-gray-700 mb-4">Available Plans</h3>

      <div class="grid gap-6">
        <div
          v-for="plan in plans.filter(plan => plan.type === selectedInsuranceType)"
          :key="plan.id"
          class="bg-white rounded-lg shadow-md p-6"
        >
          <h4 class="text-xl font-semibold text-gray-900">{{ plan.name }}</h4>
          <p class="text-gray-600">by {{ plan.provider }}</p>
          <p class="text-lg font-medium text-blue-600 mt-2">${{ plan.monthlyPremium }}/month</p>

          <h5 class="font-semibold text-gray-900 mt-3">Features:</h5>
          <ul class="list-disc pl-5 text-gray-700">
            <li v-for="feature in plan.features" :key="feature">
              {{ feature }}
            </li>
          </ul>

          <div class="mt-4">
            <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
select {
  width: 100%;
  font-size: 1rem;
}
button {
  font-size: 1.1rem;
  padding: 10px;
}
</style>
