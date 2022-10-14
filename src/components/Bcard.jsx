import React from "react";

const Bcards = (props) => {
  const wcs = [...props.wcs];

  const divStyle = {
    backgroundImage: `url('/images/weather.png')`
  };

  return wcs.map((item) => {
    return (
      <div key={item.title} className="px-2 mb-6">
        <div className="width-auto rounded overflow-hidden shadow border-gray-100 border mr-4">
          <div className="px-4">
            <a
              href={"/base/" + item.title}
              className="no-underline text-gray-600 hover:text-gray-600"
            >
              <div className="text-xl font-bold">
                <p>{item.title}</p>
              </div>
            </a>
            <div>
              <p>{item.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export const misdata = [
  {
    title: "li-mis-",
    subtitle: "li-accordion手风琴元组件允许用户切换内容部分的显示",
  },
  {
    title: "li-mis-2",
    subtitle: "li-accordion手风琴元组件允许用户切换内容部分的显示",
  },
];

export const gisdata = [
  {
    title: "li-gis-",
    subtitle: "li-accordion手风琴元组件允许用户切换内容部分的显示",
  },
];

export default Bcards;
