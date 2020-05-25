import * as React from 'react';

function OurSource() {
  return (
    <>
      <div className="text-primary h3">Готовы делиться с вами!</div>
      <div className="text-white my-4 h3">Посетите наши профили:</div>
      <div className="d-flex">
        <div className="mr-4">
          <a
            href="https://github.com/Code-of-Power"
            className="d-flex align-items-center"
          >
            <img
              className="mr-2 source-logo"
              src="/build/github-logo.png"
              alt="GitHub logotype"
            />
            <span className="font-weight-bold">GitHub</span>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Code-of-Power"
            className="d-flex align-items-center"
          >
            <img
              className="mr-2 sourse-logo"
              src="/build/npm-logo.png"
              alt="NPM logotype"
            />
            <span className="font-weight-bold">NPM</span>
          </a>
        </div>
      </div>
    </>
  );
}

export function Projects() {
  return (
    <section className="vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="project-section rounded p-4 mb-4">
              <div className="mb-4">
                <div className="h3 text-primary text-nowrap">
                  Пишем код для вас:
                </div>
              </div>
              <div>
                <ul className="h4">
                  <li className="mb-4">
                    <span className="text-primary">3</span> завершенных
                    web-проекта
                  </li>
                  <li className="mb-4">
                    <span className="text-primary">1</span> собственный проект
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-section rounded p-4">
              <div className="mb-4">
                <div className="h3 text-primary text-nowrap">
                  Развиваем OpenSource:
                </div>
              </div>
              <div>
                <ul className="h4">
                  <li className="mb-4">
                    <span className="text-primary">3</span> открытые библиотеки
                  </li>
                  <li className="mb-4">
                    <span className="text-primary">1</span> собственный проект
                  </li>
                  <li className="mb-4">
                    <span className="text-primary">1000+</span> загрузок в NPM
                  </li>
                  <li className="mb-4">
                    <span className="text-primary">100+</span> оценок на GitHub
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*<div className="offset-md-1 col-4 d-flex flex-column justify-content-center">
            <OurSource />
  </div>*/}
        </div>
      </div>
    </section>
  );
}
