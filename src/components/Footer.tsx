"use client";

import { Footer as FlowbiteFooter } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";

export function Footer() {
  return (
    <FlowbiteFooter container>
      <div className="w-full ">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FlowbiteFooter.Brand
              href="https://flowbite.com"
              src="/vercel.svg"
              alt="Flowbite Logo"
              name="myufes'24"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              {/* <FlowbiteFooter.Title title="about" /> */}
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#" className="text-2xl">
                  トップページ
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#" className="text-2xl">
                  お知らせ
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Title
                  title="企画情報"
                  className="text-2xl"
                ></FlowbiteFooter.Title>
                <ul>
                  <li>
                    <FlowbiteFooter.Link href="#" className="text-xl">
                      学内展示
                    </FlowbiteFooter.Link>
                  </li>
                  <li>
                    <FlowbiteFooter.Link href="#" className="text-xl">
                      タイムテーブル
                    </FlowbiteFooter.Link>
                  </li>
                  <li>
                    <FlowbiteFooter.Link href="#" className="text-xl">
                      ステージ企画
                    </FlowbiteFooter.Link>
                  </li>
                  <li>
                    <FlowbiteFooter.Link href="#" className="text-xl">
                      学内マップ
                    </FlowbiteFooter.Link>
                  </li>
                </ul>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div>
              <FlowbiteFooter.LinkGroup col className="text-2xl">
                <FlowbiteFooter.Link href="#">露店</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">アクセス</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">協賛企業</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">
                  ご来場の皆様へ
                </FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            href="#"
            by="宮城大学大学祭実行委員会"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
            <FlowbiteFooter.Icon href="#" icon={BsTwitterX} />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}
