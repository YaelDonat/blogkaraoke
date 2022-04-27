import React from "react";
import Footer from "./Footer";
import Post from "./Post";
import Header from "./Header";
import SmallPost from "./SmallPost";
import { getRessources } from "../services/api_services"

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {posts:[]}
  }

  componentDidMount() {
    getRessources("post").then(data => {
      this.setState({ posts: data });
    })
  }

    render() {
        return (
            <div>

            <Header/>

            <div className="grid grid-cols-3 gap-2 justify-items-center mb-10">

                <Post data={{
                  title: "Salle 1 : ",
                  title_description: "Publié le : ",
                  image : "https://www.citizenkid.com/uploads/medias/ac/e5/ace594a4121e09bef76f7ecfde96f0bca0e66600.jpeg",
                  date: "25 / 04 / 2022",
                  description: "Ambiance tamisée, douce.",
                  description2: "Chantez dans un endroit insonoris.",
                }}
                />

                <Post data={{
                  title: "Salle 2 : ",
                  title_description :"Publié le : " ,
                  date: "25 / 04 / 2022",
                  image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/f8/bc/eb/salle-kosy-jusqu-a-8.jpg",
                  description: "Coucou",
                  description2: "C'est encore nous",
                }}
              />
              
              <Post data={{
                  title: "Salle 3 : ",
                  title_description :"Publié le : " ,
                  date: "25 / 04 / 2022",
                  image: "https://i.pinimg.com/originals/a0/e7/dd/a0e7ddf0b77c1d972c6f68a33b702ef9.jpg",
                  description: "Coucou",
                  description2: "C'est encore nous",
                }}
              />

               {this.state.posts.map((value, index) => {
                return <Post data={value} key={index}/>
              })}
              
            </div>

            <div className="grid grid-cols-4 gap-2 justify-items-center my-20">

              <SmallPost data={{
                class :" card bg-white rounded-lg p-15 mt-10" , 
                title: "Salle 3 : ",
                title_description: "Publié le : ",
                image : "https://mamashelter.twic.pics/sites/21/2021/03/MAMA_LONDON_STAFF___X4A3869-1-scaled.jpg?twic=v1/focus=auto/cover=750x819",
                date: "25 / 04 / 2022",
              }}></SmallPost>

              <SmallPost data={{
                class :" card bg-white rounded-lg p-15 mt-10" , 
                title: "Salle 3 : ",
                title_description: "Publié le : ",
                image : "https://mamashelter.twic.pics/sites/21/2021/03/MAMA_LONDON_STAFF___X4A3869-1-scaled.jpg?twic=v1/focus=auto/cover=750x819",
                date: "25 / 04 / 2022",
              }}></SmallPost>

              <SmallPost data={{
                class :" card bg-white rounded-lg p-15 mt-10" , 
                title: "Salle 3 : ",
                title_description: "Publié le : ",
                image : "https://mamashelter.twic.pics/sites/21/2021/03/MAMA_LONDON_STAFF___X4A3869-1-scaled.jpg?twic=v1/focus=auto/cover=750x819",
                date: "25 / 04 / 2022",
              }}></SmallPost>

              <SmallPost data={{
                class :" card bg-white rounded-lg p-15 mt-10" , 
                title: "Salle 3 : ",
                title_description: "Publié le : ",
                image : "https://mamashelter.twic.pics/sites/21/2021/03/MAMA_LONDON_STAFF___X4A3869-1-scaled.jpg?twic=v1/focus=auto/cover=750x819",
                date: "25 / 04 / 2022",
              }}></SmallPost>

            </div>

            

            <Footer/>
                
            </div>

        );
    }
}
