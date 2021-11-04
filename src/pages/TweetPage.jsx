import { useParams } from "react-router";
import LeftSideBar from "../components/LeftSideBar";
import ModalTweet from "../components/ModalTweet";
import RightSideBar from "../components/RightSideBar";
import TopNavbar from "../components/TopNavbar";
import Tweet from "../components/Tweet";
import { useSelector } from "react-redux";

function TweetPage() {
  const params = useParams();
  const tweet = useSelector((state) => state.tweets.find((tweet) => params.id === tweet._id));

  return (
    <>
      <div className="supreme-container">
        <div className="container" style={{ width: 100 + "%" }}>
          <div className="row">
            {/*  <!--Left sidebar--> */}
            <div className="col-2">
              <LeftSideBar />
            </div>

            {/* <!--Navbar + main content--> */}
            <div className="col-10 gx-3">
              <div className="row">
                <div className="col-8">
                  <TopNavbar text="Tweet" />
                  {/*  <!--main content down here--> */}
                  <Tweet tweet={tweet} />
                  {/*  <!--end main content--> */}
                </div>
                {/*  <!--Right sidebar--> */}
                <div className="col-4 d-none d-lg-block">
                  <RightSideBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TweetPage;
