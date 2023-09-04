
<script>
import Badge from "../tools/Badge.svelte";

    export let project = {}
</script>
    <div class="card">
        <div class="img-box">
            <img src={project.img} alt="Herman" srcset="">
        </div>
    
        <div class="content">
            <div class="detail">
                <h2> {project.title}<br>
                    <span>{project.type}</span>
                </h2>
    
                <div class="data">
                    <h3>
                        {project.date}<br> 
                        <span>{project.description}</span><br/>
                        <Badge>{project.technology}</Badge>
                    </h3>

                </div>
            </div>
        </div>
    </div>
    
    <style lang="scss">
        .card {
            position: relative;
            minWidth: 350px;
            height: 190px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 35px 80px rgb(0,0,0,0.15);
            transition: 0.5s;
    
            .img-box {
                position: absolute;
                left: 50%;
                top: -50px;
                transform: translateX(-50%);
                width: 200px;
                height: 150px;
                background: #fff;
                border-radius: 20px;
                box-shadow: 0 35px 80px rgb(0,0,0,0.35);
                overflow: hidden;
                transition: 0.5s;
    
                img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                }
            }
    
            .content {
                position: absolute;
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: flex-end;
                overflow: hidden;
                margin-top: auto;
    
                .detail {
                    padding: 20px;
                    text-align: center;
                    width: 100%;
                    transition: 0.5s;
                    transform: translateY(180px);
    
                    h2 {
                        font-size: 1.25em;
                        font-weight: 600;
                        color: #555;
                        line-height: 1.25em;
    
                        span {
                            font-size: 0.75em;
                            font-weight: 500;
                            opacity: 0.50;
                        }
                    }
    
                    .data {
                        display: flex;
                        text-align: center;
                        margin: 20px 0;
    
                        h3 {
                            font-size: 1em;
                            line-height: 1.2em;
                            color: #555;
                            font-weight: 600;
    
                            span {
                                font-size: 0.85em;
                                font-weight: 400;
                                opacity: 0.5;
                            }
                        }
                    }
    
                }
            }
    
            &:hover { 
                height: 450px; 
    
                .img-box {
                    width: 250px;
                    height: 250px;
                }
    
                .content .detail {
                    transform: translateY(0px);
                }
            }
    
        }
    </style>