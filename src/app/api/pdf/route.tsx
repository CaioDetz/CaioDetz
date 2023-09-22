import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request: Request) {


    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://developer.chrome.com/');


    await browser.close();
    return NextResponse.json({ status: "ok" })
}