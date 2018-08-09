<template>
    <div>
        <section class="row">
            <div class="xs6">
                Dit is een test
            </div>

            <div class="xs6">
                Dit is een test <router-link :to="{name:'banners'}">Banners</router-link>
            </div>
        </section>
    </div>
</template>