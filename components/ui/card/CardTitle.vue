<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/utils/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <h3
    :class="
      cn(
        'text-xl leading-none tracking-tighter font-semibold mb-1',
        props.class
      )
    "
  >
    <slot />
  </h3>
</template>
