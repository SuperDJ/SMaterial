<template>
    <div>
        <article class="row">
            <h1 class="xs12 text--red-400">Bottom sheet</h1>

            <section class="xs12 sm6">
                <p>
                    The bottom sheet has two varieties:
                    <a href="#list">list</a> and <a href="#grid">grid</a>.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="list">List</h2>

            <section class="xs12 sm6">
                <p>
                    For the bottom sheet with a list all you need to do is use the following classes: 
                    <code>.sheet .sheet--list</code>
                </p>
            </section>

            <section class="xs12 sm6" style="height:300px;position:relative">
               <div class="sheet sheet--list" style="position:unset">
                   <div class="sheet__item">
                       <m-icon class="sheet__icon">person</m-icon>
                       <div class="sheet__content">Persons</div>
                   </div>
               </div> 
            </section> 
        </article>
    </div>    
</template>
