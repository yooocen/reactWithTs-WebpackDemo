import * as React from "react";
import './Hello.less';
import "./Heart.less";
var anime = require("animejs/lib/anime");
var AraleQRCode = require("arale-qrcode");
import { fireworkAction } from './FireWork';
import { Heart } from "./Heart";
export default class MarryMe extends React.Component {

    constructor() {
        super();
        const timeExist = localStorage.getItem("dada_love_lulu");
        this.state = {
            isSuccess: false
        }
        if(timeExist) {
            this.state = {
                isSuccess: true
            }
            this.time = timeExist
        }
        
    }

    private time : string;


    componentDidMount() {
        const button = document.getElementById("runaway-btn");

        const animateMove = (element: any, prop: any, pixels: any) =>
            anime({
                targets: element,
                [prop]: `${pixels}px`,
                easing: "easeOutCirc"
            });
        button &&
        ["mouseover", "click"].forEach(function (el) {
            button.addEventListener(el, function (event) {
                const top = getRandomNumber(window.innerHeight - this.offsetHeight);
                const left = getRandomNumber(window.innerWidth - this.offsetWidth);

                animateMove(this, "left", left).play();
                animateMove(this, "top", top).play();
            });
        });

        !button && fireworkAction();
        !button && new Heart('heart-container');

        const getRandomNumber = (num: any) => {
            return Math.floor(Math.random() * (num + 1));
        };

    }

    componentDidUpdate() {
        if(document.getElementById("heart-container")) {
            new Heart('heart-container');
        }
    }

    success() {
        this.setState({
            isSuccess: true
        })
        fireworkAction();
        this.time = this.getDateTime("today");
        localStorage.setItem("dada_love_lulu", this.time);
    }

    getDateTime(type: string) {
        // 获取当前日期
        let timestamp = Date.parse(new Date());
        let date = new Date(timestamp);
        if (type == 'tomorrow') { // 明天
            date.setDate(date.getDate() + 1);

        } else if (type == 'today') { // 今天
            date.setDate(date.getDate());
        }
        //获取年份 ?
        var Y = date.getFullYear();
        //获取月份 ?
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        //获取当日日期?
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

        var H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

        var Min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

        var S = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let todayDate = Y + '-' + M + '-' + D + ' ' + H + ':' + Min + ':' + S;
        return todayDate
    };

    renderAsk() {
        return (
            <div>
                <img className="ask" src="../resources/marryme.png" />
                <div className="button-choice" onClick={() => this.success()}>答应我<img src="../resources/1-01-30_00-18-52.png" /></div>
                <div id="runaway-btn"> <span>拒绝我</span> <img src="../resources/Snipaste_2021-01-30_01-34-46.png" style={{ marginTop: '-5px' }} /> </div>

            </div>)
    }

    generQR() {
        var codeFigure = new AraleQRCode({
            "render": "svg",  // 生成的类型 'svg' or 'table'
            "text": '哒哒爱璐璐一辈子\n'+this.time, // 需要生成二维码的链接
            "size": 120 // 生成二维码大小
        });
        return codeFigure;
    }

    renderSuccess() {
        let qr = this.generQR();
        let root = document.getElementById("root");
        root.appendChild(qr);
        return (<div className="puture">
            <img className="me" src="../resources//me.png" />
            <img className="she" src="../resources//she.png" />
            <span className="successText"> 我求婚成功啦！ </span>
            <span className="successDate"><span className="comma">“</span>{this.time}<span className="comma">”</span></span>
            <img className="qrlove" src="../resources/xijieliangyuan.png" />
            <div className="heart" id="heart-container">
                <div className="heart-text"><span>点我鸭</span></div>
            </div>
        </div >)
    }

    render() {
        return (
            <div className="marryme-page" id="marryme">
                <canvas id="canvas" style={!this.state.isSuccess ? { display: 'none' } : {}}>Your browser does not support the 'canvas' element.</canvas>
                {!this.state.isSuccess ? this.renderAsk() : this.renderSuccess()}
            </div>

        )
    }
}