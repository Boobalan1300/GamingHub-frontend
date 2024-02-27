

import React from "react";
import "../styles/web4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import { FaShoppingBag } from "react-icons/fa";
function MyComponent() {
  return (
    <div>
      <Navbar />

      <div className="container intro">
        <div className="row justify-content-evenly">
          {/* md-above--col , md and less-- full */}
          <div className="col-md-6 intro-bg  d-flex align-items-center">
            <div className="details my-5 mx-4">
              <h6 className="fw-bold">WELCOME TO LUGX</h6>
              <h5 className="text-red fs-2 fw-bold">BEST GAMING SITE EVER!</h5>
              <h6 className="mt-4">
                Discover the world of free online games with Poki! Play
                instantly, no downloads, and enjoy games compatible with all
                devices.the world of free online games with Poki! Play
                instantly, no downloads, and enjoy games compatible with all
                devices.
              </h6>
              <div className="my-5">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    data-mdb-ripple-init
                  >
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 intro-bg  d-flex justify-content-center">
            <img
              src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/banner-image.jpg"
              className="my-5 rounded-3"
              alt="banner"
            />
          </div>
        </div>

        <div className="container features ">
          <div className="row mb-4 d-flex align-items-center">
            <div className="col-lg-3  col-md-6">
              <div className="bgs mb-4  mt-sm-5 text-white p-5 rounded-3 four-blocks">
                <div className="text-center ">
                  <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-01.png"></img>
                </div>
                <p className="text-center fs-4 pt-2">upload</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <div className="bgs mb-4  mt-sm-5 text-white p-5 rounded-3 four-blocks">
                <div className="text-center ">
                  <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-03.png"></img>
                </div>
                <p className="text-center fs-4 pt-2">Replay</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <div className="bgs mb-4  mt-sm-5 text-white p-5 rounded-3 four-blocks">
                <div className="text-center ">
                  <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-02.png"></img>
                </div>
                <p className="text-center fs-5 pt-2">Profile</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <div className="bgs mb-4  mt-sm-5 text-white p-5 rounded-3 four-blocks">
                <div className="text-center ">
                  <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-04.png"></img>
                </div>
                <p className=" fs-5 pt-2 text-nowrap text-center">Layout</p>
              </div>
            </div>
          </div>
        </div>

        <div  id="trending" className="container trending ">
          <div className="row ">
            <div>
              <h4 className="text-red">Trending</h4>
              <h1 className="fs-2 fw-bold">Trending Games</h1>
            </div>
          </div>

          <div className="row  games mb-4">
            <div className="col-lg-3 col-md-6">
              <div className="bg-light shadow rounded-5 mt-sm-4 trend-box">
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-01.jpg"
                  className="rounded-5 trend-img"
                ></img>
                <div>
                  <div className="row d-flex justify-content-evenly px-3 py-2">
                    <div className="col">
                      <p className="mb-0">Action</p>
                      <p>Assasin Creed</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                      <FaShoppingBag size={25} className="bag-icon mt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light shadow  rounded-5 mt-sm-4 trend-box">
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-02.jpg"
                  className="rounded-5 trend-img"
                ></img>
                <div>
                  <div className="row d-flex justify-content-evenly px-3 py-2">
                    <div className="col">
                      <p className="mb-0">Action</p>
                      <p>Assasin Creed</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                      <FaShoppingBag size={25} className="bag-icon mt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light shadow  rounded-5 mt-sm-4 trend-box">
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-03.jpg"
                  className="rounded-5 trend-img"
                ></img>
                <div>
                  <div className="row d-flex justify-content-evenly px-3 py-2">
                    <div className="col">
                      <p className="mb-0">Action</p>
                      <p>Assasin Creed</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                      <FaShoppingBag size={25} className="bag-icon mt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-light shadow  rounded-5 mt-sm-4 trend-box">
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/trending-04.jpg"
                  className="rounded-5 trend-img"
                ></img>
                <div>
                  <div className="row d-flex justify-content-evenly px-3 py-2">
                    <div className="col">
                      <p className="mb-0">Action</p>
                      <p>Assasin Creed</p>
                    </div>
                    <div className="col d-flex justify-content-end ">
                      <FaShoppingBag size={25} className="bag-icon mt-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  id="topGames" className="container my-5">
          <div className="row">
            <div>
              <h4 className="text-red">Top Games</h4>
              <h4 className="fs-2 fw-bold">Most Played</h4>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-2 col-md-6">
              <div className="bg-light shadow rounded-5 mt-sm-4 top-games ">
                <div className="top-games ">
                  <img
                    src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg"
                    className="rounded-5 w-100"
                  ></img>
                </div>
                <div className="row text-center">
                  <div className="py-3">
                    <p className="mb-0">Adventure</p>
                    <p>Assasin Creed</p>
                    <button className="btn btn-md rounded-5 bg-danger text-white">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 ">
              <div className="bg-light shadow rounded-5  mt-sm-4 top-games ">
                <div className="top-games ">
                  <img
                    src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-02.jpg"
                    className="rounded-5 w-100"
                  ></img>
                </div>
                <div className="row text-center">
                  <div className="py-3">
                    <p className="mb-0">Adventure</p>
                    <p>Assasin Creed</p>
                    <button className="btn btn-md rounded-5 bg-danger text-white">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="bg-light shadow rounded-5  mt-sm-4 top-games ">
                <div className="top-games ">
                  <img
                    src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-03.jpg"
                    className="rounded-5 w-100"
                  ></img>
                </div>
                <div className="row text-center">
                  <div className="py-3">
                    <p className="mb-0">Adventure</p>
                    <p>Assasin Creed</p>
                    <button className="btn btn-md rounded-5 bg-danger text-white">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 ">
              <div className="bg-light shadow rounded-5  mt-sm-4 top-games ">
                <div className="top-games ">
                  <img
                    src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-04.jpg"
                    className="rounded-5 w-100"
                  ></img>
                </div>
                <div className="row text-center">
                  <div className="py-3">
                    <p className="mb-0">Adventure</p>
                    <p>Assasin Creed</p>
                    <button className="btn btn-md rounded-5 bg-danger text-white">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="bg-light shadow rounded-5  mt-sm-4 top-games ">
                <div className="top-games ">
                  <img
                    src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-05.jpg"
                    className="rounded-5 w-100"
                  ></img>
                </div>
                <div className="row text-center">
                  <div className="py-3">
                    <p className="mb-0">Adventure</p>
                    <p>Assasin Creed</p>
                    <button className="btn btn-md rounded-5 bg-danger text-white">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 ">
              <div className="bg-light shadow rounded-5  mt-sm-4 top-games ">
                <div className="">
                  <img
                    src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-06.jpg"
                    className="rounded-5 w-100"
                  ></img>
                </div>
                <div className="row text-center">
                  <div className="py-3">
                    <p className="mb-0">Adventure</p>
                    <p>Assasin Creed</p>
                    <button className="btn btn-md rounded-5 bg-danger text-white">
                      EXPLORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="categories" className="container my-5">
          <div className="row">
            <div>
              <h4 className="text-red">Categories</h4>
              <h4 className="fs-2 fw-bold">Top categories</h4>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly">
            <div className=" col-lg-2 col-md-5 mt-sm-4 p-0 bg-primary rounded-5 box-img">
              <div className="box-img ">
                <h2 className="text-center text-white my-4 ">action</h2>
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-01.jpg"
                  className="rounded-5 w-100"
                ></img>
              </div>
            </div>

            <div className="col-lg-2 col-md-5 mt-sm-4 p-0 bg-primary rounded-5 ms-2 box-img">
              <div className="box-img">
                <h2 className="text-center text-white  my-4">action</h2>
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-02.jpg"
                  className="rounded-5 w-100"
                ></img>
              </div>
            </div>

            <div className=" col-lg-2 col-md-5 mt-sm-4 p-0 bg-primary rounded-5 ms-2 box-img">
              <div className="box-img">
                <h2 className="text-center text-white  my-4">action</h2>
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-03.jpg"
                  className="rounded-5 w-100"
                ></img>
              </div>
            </div>

            <div className="col-lg-2 col-md-5 mt-sm-4 p-0 bg-primary rounded-5 ms-2 box-img">
              <div className="box-img">
                <h2 className="text-center text-white  my-4">action</h2>
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-04.jpg"
                  className="rounded-5 w-100"
                ></img>
              </div>
            </div>

            <div className=" col-lg-2 col-md-5 mt-sm-4 p-0 bg-primary rounded-5 ms-2 box-img">
              <div className="box-img">
                <h2 className="text-center text-white  my-4">action</h2>
                <img
                  src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/categories-05.jpg"
                  className="rounded-5 w-100"
                ></img>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-primary rounded-top-5 text-white text-center py-3">
      <div className="container">
        <p className="m-0">
          Copyright © 2048 LUGX Gaming Company. All rights reserved. Design:
          TemplateMo
        </p>
      </div>
    </footer>

      </div>
    </div>
  );
}

export default MyComponent;
