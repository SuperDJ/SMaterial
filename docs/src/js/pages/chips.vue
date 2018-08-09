<template>
    <div>
        <article class="row">
            <section class="xs12">
                <p>
                    There are a couple types of chips that you can use. For now you can use the <a href="#chip">default</a>, <a href="#outlined">outlined</a>, and <a href="#input">input</a>.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="chip">Chip</h2>

            <section class="xs12 sm6">
                <p>
                    For the default chip all you need to use is the class <code>.chip</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <m-chip>Chip</m-chip>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="outlined">Outlined Chip</h2>

            <section class="xs12 sm6">
                <p>
                    For the outlined chip you also need to use the class <code>.chip--outlined</code>
                    The outlined chip can also contain a icon or image. These elemtents do not require any additional classes.
                </p>
            </section>

            <section class="xs12 sm6">
                <m-chip outlined thumbnail>
                    <img class="chip__thumbnail" src="//via.placeholder.com/24x24" alt="chip placeholder"> Chip
                </m-chip>
            </section>
        </article>

        <article class="row"> 
            <h2 class="xs12" id="input">Input Chip</h2>

            <section class="xs12 sm6">
                <p>
                    For the input chip you also need to use the class <code>.chip--input</code>
                    The input can also contain a icon or image. These elemtns do not require any additional classes.
                    The close action however does need the class <code>.chip--input--close</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <m-chip thumbnail remove>
                    <img src="//via.placeholder.com/24x24" alt="chip placeholder" class="chip__thumbnail"> 
                    Chip 
                    <i class="material-icons chip__remove">cancel</i>
                </m-chip>
            </section> 
        </article>
    </div>
</template>

<script>
    import MChip from '@/components/Chip';
    export default {
        components: {
            MChip
        }
    }
</script>