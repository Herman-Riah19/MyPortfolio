<script lang="ts">
import TextMuted from "../typography/TextMuted.svelte"

    export let title: string = ''
    export let date: string = ''
    export let institute: string = ''
    export let description: string = ''
</script>
<div class="resume-item">
    <div class="row">
        <h4 class="title col-lg-8">{title}</h4>
        <div class="ml-5">
            <TextMuted>{date}</TextMuted>
        </div>
    </div>
    <p><em>{institute}</em></p>
    <p>{@html description}</p>
</div>
<style lang="scss">
    .resume-item {
        padding: 0 0 20px 20px;
        margin-top: -2px;
        border-left: 5px solid #e21e80;
        position: relative;

        h4, h5 {
            line-height: 20px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: #e21e80;
            margin-bottom: 10px;
            margin-left: 10px;
        }

        .title {
            line-height: 20px;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: #e21e80;
            margin-bottom: 10px;
            margin-left: 10px;
        }

        .date {
            font-size: 16px;
            color: #e21e80;
            padding: 5px 15px;
            display: inline-block;
            font-weight: 600;
            margin-bottom: 10px;
        }

        p {
            font-size: 15px;
            text-align: justify;
            padding-left: 20px;

            em {
                font-size: 17px;
                font-style: italic;
                font-weight: 400;
            }
        }

        ul {
            padding-left: 20px;

            li {
                padding-bottom: 10px;
            }
        }

        &:last-child {
            padding-bottom: 0;
        }

        &::before {
            content: "";
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 20px;
            left: -11px;
            top: 0;
            background: #db609e;
            border: 2px solid #e21e80;
        }
    }
</style>