<template>
    <div>
        <article class="row">
            <section class="xs12 sm6">
                <p>
                    The tooltip can be used to give extra information about something.
                    The tooltip can be used around many other objects.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12">Data table</h2>

            <section class="xs12 sm6">
                <p>
                    You can simply add the class <code>.data-table</code> to a table and the styling will be applied.
                    If you would like each row to have a hover you can add the class <code>.data-table--hover</code> to the table aswell.

                </p>
            </section>

            <section class="xs12 sm6">
                <table class="data-table data-table--hover">
                    <thead>
                        <tr>
                            <th>Header</th>
                            <th>Text column</th>
                            <th class="xs__text--right">Number column</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Row item 1</td>
                            <td>Row data 1</td>
                            <td class="xs__text--right">1.1</td>
                        </tr>
                        <tr>
                            <td>Row item 2</td>
                            <td>Row data 2</td>
                            <td class="xs__text--right">2.2</td>
                        </tr>
                        <tr>
                            <td>Row item 3</td>
                            <td>Row data 3</td>
                            <td class="xs__text--right">3.3</td>
                        </tr>
                        <tr>
                            <td>Row item 4</td>
                            <td>Row data 4</td>
                            <td class="xs__text--right">4.4</td>
                        </tr>
                    </tbody>
                </table>
            </section> 
        </article>
    </div>    
</template>
