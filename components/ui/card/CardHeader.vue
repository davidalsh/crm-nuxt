<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/utils/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('flex flex-col p-3', props.class)">
    <slot />
  </div>
</template>
