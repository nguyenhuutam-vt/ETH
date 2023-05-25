import { Card } from "components/Card/Card";
import { styled } from "styled-components";
import { Sidebar } from "components/Sidebar/Sidebar";
import "../../App.css";
import React from "react";
import rec8 from "assets/Rectangle 8.png";
import Header from "components/Header/Header";
import Rectangle from "assets/Rectangle 13.png";
import { Button, Stack } from "@mui/material";
import { Art } from "./Art";
import eclip6 from "assets/Ellipse 6.png";
import group8 from "assets/Group 8.png";
import abc from "assets/Ellipse 6 (1).png";
import { NameFlow } from "./NameFlow";

const ButtonStyled = styled(Button)`
  a {
    text-decoration: none;
  }
`;
const Home = () => {
  return (
    <div className="App">
      <div className="sidebarr">
        <Sidebar />
      </div>
      <div className="body">
        <Header />
        <div>
          <div className="rectangle-card">
            <div className="rec">
              <img className="img-rec" src={Rectangle} alt="" />
              <div className="text-rec">
                Discover, Create and Sell Your Own NFT.
              </div>
              <div className="button-dis-create">
                <button className="discover">Discover</button>
                <button className="create">Create</button>
              </div>
            </div>
            <div className="card">
              <Card title="Revenue" amount="5.00" percent={12.3}>
                8.1
              </Card>
              <Card title="Spending" amount="2.00" percent={8.1}>
                8.1
              </Card>
              <Card title="ROI" amount="14.02" percent={-5.1}>
                5.1
              </Card>
              <Card title="Estimated" amount="7.32" percent={3.2}>
                3.2
              </Card>
            </div>
          </div>
          <div className="trending">
            <div className="trending-auctions">
              <div className="auctions">
                <div className="p-trending">Trending Auctions</div>
                <div className="art">
                  {Art.map((val) => {
                    return (
                      <Stack direction="row" spacing={10}>
                        <ButtonStyled color="secondary" className="btn-art">
                          {val.title}
                        </ButtonStyled>
                      </Stack>
                    );
                  })}
                </div>
              </div>
              <div className="img-trending">
                <div className="img">
                  <div class="container">
                    <img src={rec8} alt="" />
                    <div class="middle">
                      <button class="text">Place a Bid</button>
                    </div>
                  </div>
                  <div className="apple">
                    <div>
                      <div className="apple-love">Ape In Love</div>
                      <div className="eclip6">
                        <img src={eclip6} alt="" />
                        <div className="john">@johnti60</div>
                      </div>
                      <div className="current">Current Bid</div>
                    </div>
                    <div>
                      <div className="like">21,5K Likes</div>
                      <div>
                        <br />
                        <br />
                      </div>
                      <div className="ETH9">
                        <img src={group8} alt="" /> 9.10 ETH
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <div class="container">
                    <img src={rec8} alt="" />
                    <div class="middle">
                      <button class="text">Place a Bid</button>
                    </div>
                  </div>

                  <div className="apple">
                    <div>
                      <div className="apple-love">Ape In Love</div>
                      <div className="eclip6">
                        <img src={eclip6} alt="" />
                        <div className="john">@johnti60</div>
                      </div>
                      <div className="current">Current Bid</div>
                    </div>
                    <div>
                      <div className="like">21,5K Likes</div>
                      <div>
                        <br />
                        <br />
                      </div>
                      <div className="ETH9">
                        <img src={group8} alt="" /> 9.10 ETH
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <div class="container">
                    <img src={rec8} alt="" />
                    <div class="middle">
                      <button class="text">Place a Bid</button>
                    </div>
                  </div>
                  <div className="apple">
                    <div>
                      <div className="apple-love">Ape In Love</div>
                      <div className="eclip6">
                        <img src={eclip6} alt="" />
                        <div className="john">@johnti60</div>
                      </div>
                      <div className="current">Current Bid</div>
                    </div>
                    <div>
                      <div className="like">21,5K Likes</div>
                      <div>
                        <br />
                        <br />
                      </div>
                      <div className="ETH9">
                        <img src={group8} alt="" /> 9.10 ETH
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img">
                  <div class="container">
                    <img src={rec8} alt="" />
                    <div class="middle">
                      <button class="text">Place a Bid</button>
                    </div>
                  </div>
                  <div className="apple">
                    <div>
                      <div className="apple-love">Ape In Love</div>
                      <div className="eclip6">
                        <img src={eclip6} alt="" />
                        <div className="john">@johnti60</div>
                      </div>
                      <div className="current">Current Bid</div>
                    </div>
                    <div>
                      <div className="like">21,5K Likes</div>
                      <div>
                        <br />
                        <br />
                      </div>
                      <div className="ETH9">
                        <img src={group8} alt="" /> 9.10 ETH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-creator">
              <div className="creator">
                <div className="top">
                  <div className="p-top">Top Creator</div>
                  <div className="p-see">See All</div>
                </div>

                {/* <div className="number1">1.</div>
                  <div>
                    <img src={abc} alt="" className="imgabc" />
                  </div>
                  <div>
                    <div className="michael">Michael Jordan</div>
                    <div className="jordan">@jordan_</div>
                  </div>
                  <div>
                    <button className="btn-flw">Follow</button>
                  </div> */}

                {NameFlow.map((valname) => {
                  return (
                    <div className="all-flw">
                      <div className="number1">{valname.id}.</div>
                      <div className="img-abc">
                        <img src={abc} alt="" className="imgabc" />
                      </div>
                      <div className="name-mail">
                        <div className="michael">{valname.namee}</div>
                        <div className="jordan">{valname.mail}</div>
                      </div>
                      <div className="flw-btn">
                        <button className="btn-flw">{valname.flw}</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
