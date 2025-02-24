<script setup>
import { ref } from 'vue'

const specialties = [
  'Primary Care',
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Dermatology',
  'Endocrinology',
]

const doctors = ref([
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Primary Care',
    availability: 'Today',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    availability: 'Tomorrow',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
])

const selectedSpecialty = ref('')
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Find a Doctor</h1>
    
    <!-- Search and Filter Section -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <label for="search" class="block text-lg font-medium text-gray-700 mb-2">
            Search Doctors
          </label>
          <input
            type="text"
            id="search"
            class="input"
            placeholder="Enter doctor name or specialty"
          >
        </div>
        <div>
          <label for="specialty" class="block text-lg font-medium text-gray-700 mb-2">
            Specialty
          </label>
          <select
            id="specialty"
            v-model="selectedSpecialty"
            class="input"
          >
            <option value="">All Specialties</option>
            <option v-for="specialty in specialties" :key="specialty" :value="specialty">
              {{ specialty }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Doctor List -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="doctor in doctors"
        :key="doctor.id"
        class="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <img :src="doctor.image" :alt="doctor.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900">{{ doctor.name }}</h3>
          <p class="text-gray-600">{{ doctor.specialty }}</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-sm text-gray-500">Available: {{ doctor.availability }}</span>
            <span class="text-sm font-medium text-primary-600">★ {{ doctor.rating }}/5</span>
          </div>
          <button class="btn btn-primary w-full mt-4">
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>