import React from "react";
import Model from "../Model";
/*import ButtonGithub from "./Icons/ButtonGithub";*/
/*{export することでモジュールとしてimportできる}*/
const path = "./img/onomation/";
const Onomation = () => {
  return (
    <Model
      title={"Onomation"}
      subtitle={"オノマトペ + アニメーション"}
      date={"July.2023"}
      thumbnail={path + "onomation_samune.jpg"}
      description={
        <div>
        <h1>
        オノマトペを入力すると、そのオノマトペに合わせたアニメーションがGPTによって生成されます。投稿したり、みんなの投稿を見たりできます。初の共同開発です。
        </h1>
        <p>
            <a href="https://onomation.yiwashita.com/" className="text-green-500 hover:text-green-200 hover:scale-150">  アプリのリンクはこちら </a>
        </p>
        <a href = "https://youtu.be/w2poy_q8Vmo" className="text-green-500 hover:text-green-200 hover:scale-150">  デモ動画はこちら </a>
      </div>
      }
      skills={"Javascript, Next.js, GPT-3.5, Firebase,FastAPI"}
      links={<a href = "https://github.com/yiRMT/Onomation">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" className=' hover:scale-150'><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>}
      imgPaths={[
        path + "slide4.jpg",
        path + "slide5.jpg",
        path + "slide6.jpg",
        path + "slide7.jpg",
      ]}
      
    />
  );
};

export default Onomation;