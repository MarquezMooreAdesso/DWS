<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import { inject } from "vue"
    
    const store = inject('store')
    const state = store.state
    const methods = store.methods
</script>

<template>
    <section class="stepper-wrapper">
        <div class="step" v-for="(item, index) in state.steps" :key="index">
            <span
                :class="{active: item.status === 'active'}"
                class="step-title"
            >
            {{ methods.getContent(`Navigation_Step${index + 1}`) }}
            </span>
            <a  
                :class="{active: item.status === 'active', complete: item.status === 'complete'}" 
                class="step-icon" 
                href="#"
            >
                <i v-if=" item.status === 'complete' " class="pi pi-check"></i>
                <span class="stepper-icon-number" v-if="item.status !== 'complete'">{{ index + 1 }}</span>
            </a>
        </div>
        <div class="stepper-line_container">
            <div class="stepper-line"></div>
        </div>
    </section>
</template>

<style scoped>
    .stepper-wrapper {
        /* Component Variables */
        --stepper-icons-w: 56px;
        --stepper-icons-h: 56px;

        /* Root Component Styles */
        position: relative;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 700;
    }
    .stepper-line_container {
        position: absolute;
        width: 100%;
        bottom: calc(var(--stepper-icons-h) / 2);
        padding: 0 2rem 0 2rem;
    }
    .stepper-line {
        width:100%;
        border-top: 1px dashed #8da0aa;
    }
    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
    }
    .step-title {
        font-weight: 400;
        color: #5A6D78;
        line-height: 24px;
        padding-bottom: 8px;
    }
    .step-icon {
        width: var(--stepper-icons-w);
        height: var(--stepper-icons-h);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border: 2px solid #D9DFE3;
        box-shadow: 0px 4px 8px rgba(141, 160, 170, 0.1);
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #8DA0AA; 
        background-color: white;
    }
    .step-title.active {
        color: #007D85;
        font-weight: 700;
    }

    .step-icon.active {
        background-color: #007D85;
        box-shadow: 0px 4px 4px rgba(141, 160, 170, 0.25);  
        color: white;
        border: none;
    }

    .pi-check {
        font-weight: 700;
    }

    .step-icon.complete {
        background-color: #60A540;
        box-shadow: 0px 4px 4px rgba(141, 160, 170, 0.25);  
        color: white;
        border: none;
    }

    @media screen and (max-width: 1024px) {
        .stepper-wrapper {
            /* Component Variables */
            --stepper-icons-w: 40px;
            --stepper-icons-h: 40px;
        }
        .step-title {
            display: none;
        }
        .pi-check {
            font-size: 1rem;
        }
    }
</style>


