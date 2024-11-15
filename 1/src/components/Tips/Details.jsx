import React from "react";
import JumboWrap from "../Section/Jumbotron/JumboWrap";
import popular from "/img/popular_news.png";
import RelatedArticle from "./RelatedArticle";
import Comment from "./Comment";

function Details() {
  return (
    <div className="w-full mx-auto">
      <JumboWrap className="w-full" img={popular} />
      <div className="flex mt-8 px-4">
        <div className="flex flex-col items-center space-y-4 w-12">
          <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            FB
          </button>
          <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600">
            TW
          </button>
          <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
            IG
          </button>
          <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
            LN
          </button>
        </div>
        <div className="flex-1 ml-4">
          <p className="text-xl mb-2">BERITA</p>
          <h1 className="text-3xl font-bold text-left leading-tight">
            Lebih Menguntungkan, Petani Cirebon
            <br />
            Pilih Tanam Bawang Merah Ketimbang Padi
          </h1>
          <p className="text-neutral-600 mt-2">
            Written by Author - 24 October 2023
          </p>
          <div className="mt-6 text-neutral-700 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
              etiam porttitor commodo diam facilisis tortor. Ac lobortis
              elementum, nec in facilisis vitae. Cursus quis mi tortor, tellus
              magna feugiat. Commodo, elit praesent enim, mi ornare lectus id.
              Diam urna morbi odio diam eget. Commodo at ac pretium ultrices et
              sit. Mollis odio mauris ullamcorper in in dis donec est mi. Urna
              vel, sed hac condimentum ac etiam eleifend nam mauris. Blandit
              natoque convallis dignissim aliquet risus, etiam. Risus, commodo
              placerat egestas tempus turpis. Eu, tincidunt nunc, faucibus
              pulvinar erat. Egestas libero porttitor purus consequat, egestas.
              Arcu at erat vulputate praesent sollicitudin morbi. Nibh a purus
              nunc arcu aliquet a, ut sit pulvinar. Vulputate dictum cras
              suspendisse lorem iaculis imperdiet. Eget aenean commodo mi nec
              urna mattis tempor, pharetra ultrices. Habitant morbi a arcu
              mauris aliquet nec est vel.
              <br />
              <br />
              Faucibus eu sagittis cursus pretium, at nunc, nulla dignissim
              massa. Ultricies eget nisl consequat nec. Facilisi facilisi
              consequat at aliquam. Gravida aenean viverra lectus enim nulla
              nunc. Lacus, ullamcorper nulla feugiat purus, euismod. Dui mi
              tempor hendrerit habitant pharetra sed magna vulputate. Praesent
              in euismod posuere maecenas. Augue mattis suspendisse in
              suspendisse dapibus gravida. Fames aliquam ultricies nunc a. Quam
              adipiscing parturient amet suspendisse velit quis orci. Nulla
              faucibus donec arcu tellus pellentesque. Massa sagittis sed elit
              consequat rhoncus sagittis massa. Tincidunt et libero, ipsum
              lectus. Et malesuada amet, et sed nulla viverra. In felis pretium
              volutpat porttitor. Ac feugiat ac egestas tristique. Adipiscing
              est eget vel eget purus velit leo a tortor. At pellentesque purus
              pellentesque dolor, vitae fusce. Posuere donec non felis a.
              Consectetur suspendisse in nulla vulputate. Et ut viverra
              consectetur vitae. Ac nascetur pellentesque dictumst vivamus fames
              ut. Lectus quis turpis at aliquam orci. Nec hendrerit iaculis
              ipsum non ullamcorper purus. Ornare consequat accumsan, lectus
              pretium, eu risus, at in. Vitae erat leo odio vel at sem at at
              nibh. Tincidunt augue malesuada ornare amet posuere pellentesque
              magna. Dui donec a sed blandit arcu. Nunc commodo et aliquet
              dapibus tortor nisl euismod.
              <br />
              <br />
              Condimentum ac pharetra amet, integer purus. Pharetra porttitor
              purus quis lectus sagittis sed. Pharetra ornare duis nunc, semper.
              Auctor quam sed libero, euismod sagittis netus imperdiet. Platea
              feugiat est consectetur turpis pharetra volutpat integer. Vitae
              enim, diam mattis ultrices vulputate at amet vitae non. Ultricies
              vestibulum quis in ut laoreet. Sit faucibus convallis potenti
              interdum fames. Laoreet fringilla metus tellus quis purus. Velit
              at erat senectus nec, vestibulum. Turpis tortor amet ultrices
              vitae vitae lobortis diam accumsan. Viverra turpis magna potenti
              volutpat sagittis dui lacus. Massa phasellus malesuada eu, arcu
              dictum lorem turpis mi molestie. Et viverra dui leo in aliquet ut.
              Orci arcu quis nibh ultricies integer in turpis purus interdum.
              Rhoncus ac a, phasellus felis adipiscing. Convallis netus morbi
              morbi sed dolor, curabitur. Est mattis ridiculus eget venenatis a
              ut. Ultrices feugiat vitae urna augue dolor. Nisl turpis amet sit
              aliquet ultrices.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Berita Lainnya</h2>
            <div className="flex gap-4 mt-4 overflow-x-auto">
              <RelatedArticle />
            </div>
          </div>
          <div>
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
