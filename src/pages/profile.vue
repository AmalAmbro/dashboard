<template>
  <div>
    <Card>
      <template #title>
        Profile
      </template>

      <template #content>
        <form class="flex flex-col gap-4">

          <!-- Avatar + Basic Info -->
          <div class="flex flex-col md:flex-row gap-4 items-start">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              <div class="flex flex-col gap-2">
                <label for="first_name">First Name</label>
                <InputText id="first_name" v-model="form.first_name" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="last_name">Last Name</label>
                <InputText id="last_name" v-model="form.last_name" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="email">Email</label>
                <InputText id="email" v-model="form.email" />
              </div>
            </div>
          </div>

          <!-- Contact Details -->
          <Divider />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="phone">Phone</label>
              <InputText id="phone" v-model="form.phone" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="dob">Date of Birth</label>
              <DatePicker id="dob" v-model="form.dob" showIcon />
            </div>
          </div>

          <!-- Address -->
          <Divider />

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <label for="address">Address</label>
              <Textarea
                id="address"
                v-model="form.address"
                rows="3"
                autoResize
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="flex flex-col gap-2">
                <label for="city">City</label>
                <InputText id="city" v-model="form.city" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="state">State</label>
                <InputText id="state" v-model="form.state" />
              </div>

              <div class="flex flex-col gap-2">
                <label for="zip">ZIP Code</label>
                <InputText id="zip" v-model="form.zip" />
              </div>
            </div>
          </div>

          <!-- Actions -->
          <Divider />

          <div class="flex justify-end gap-3">
            <Button
              label="Reset"
              severity="secondary"
              outlined
              @click.prevent="resetForm"
            />
            <Button
              label="Save Changes"
              icon="pi pi-check"
            />
          </div>

        </form>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  dob: null,
  address: '',
  city: '',
  state: '',
  zip: ''
})

const resetForm = () => {
  Object.keys(form).forEach(key => {
    form[key] = key === 'dob' ? null : ''
  })
}
</script>
