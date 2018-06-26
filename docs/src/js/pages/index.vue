<template>
    <div>
       <section class="row">
                <h1 class="xs2 offset-lg3 text--red-400">Introduction</h1>
        </section>

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