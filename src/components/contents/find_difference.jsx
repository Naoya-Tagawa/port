import React from "react";
import Model from "../Model";
/*import ButtonGithub from "./Icons/ButtonGithub";*/
/*{export することでモジュールとしてimportできる}*/
const path = "./img/fd/";
const Find_difference = () => {
  return (
    <Model
      title={"画像の表示・画像処理・間違い探し手助け"}
      subtitle={"画像の相違点を探して間違い探しを解くのを支援します"}
      date={"March.2023 - April.2023"}
      thumbnail={path + "machigaisamune.jpg"}
      description={
        <div>
        <h1>
        画像の表示・アップロード・画像処理などができます。特徴量のマッチングにより画像の相違点を表示する機能があります。間違い探しが分からないときはぜひ!
        </h1>
      </div>
      }
      skills={"Python Django"}
      links={<a href = "https://github.com/Naoya-Tagawa/django_find_difference">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" className=' hover:scale-150'><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>}
      imgPaths={[
        path + "matop.png",
        path + "input.jpg",
        path + "input2.jpg",
        path + "output.jpg",
      ]}
    />
  );
};

export default Find_difference;