<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="sparplanrechner-container">
        <slot name="sparplanrechner-header" />
        <slot name="stepper" />
        <slot name="main-content" />
        <slot name="buttons" />
    </section>
</template>

<style>
    .sparplanrechner-container  {
        top: 65px;
        display: flex;
        flex-direction: column;
        max-width: 860px; 
        background-color: white;
        margin: 0 auto 65PX auto;
        border-radius: 12px ;
        box-shadow: 0px 40px 32px 0px rgba(15, 15, 15, 0.12);
        padding: 30px;
        gap: 32px;
    }
    .sparplanrechner-header {
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
    }

    .sparplanrechner-button_container{
        display: flex;
        justify-content: end;
    }
    .sparplanrechner-button_container.double {
        justify-content: space-between;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .radioHeading,
    .d-base-input__label {
        font-family: DWS Slab;
        font-size: 14px !important;
        font-weight: 700 !important;
        line-height: 24px;
        margin-bottom: 10px;
        color: #2E393D;
    }
    .required {
        color: #E84057
    }

    @media screen and (max-width: 1024px) {
        .sparplanrechner-container {
            margin: 0 10px;
        }
        .sparplanrechner-header {
            font-size: 24px;
            line-height: 32px;
        }
        .sparplanrechner-button_container.double {
            flex-direction: column-reverse;
            gap: 16px;
        }
    }
</style>
