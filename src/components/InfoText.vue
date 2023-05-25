<template>
    <div class="infoText-container">
        <div class="inforText-icon-container">
            <i class="pi pi-info-circle infoText-icon"></i>
        </div>
        <div class="inforText-text-container">
            <BaseText class="infoText-text" :text="infoText"/>
        </div>  
    </div>
</template>

<script setup>
    import { BaseText } from "dws-dx"

    defineProps({
        infoText: String,
    })
</script>

<style scoped>
    .infoText-container {
        display: flex;
        gap: 8px;
    }
    .infoText-text {
        font-weight: 400;
        font-size: 14px !important; /* Overwrite BaseText default styling */
        line-height: 16px !important; /* Overwrite BaseText default styling */
        padding-right: 16px;
    }
</style>