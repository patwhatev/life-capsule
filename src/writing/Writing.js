import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

const albums = [
                        "I was on the earth, with no buildings and it was dusty and deserted but dry like new mexico where my grandma died. I rode around on a shitty wagon through hardened mud and had a sense of urgency. There were fences of barbed wire and chain link. like a fence without a post, i would put my back against the fence and lean on it, then somersault over the trampled metal over and over. \
                        \
                        I raced with a sense of urgency, i thought i was in the lead, no one else was in the dream but i thought people were nearby and racing with me. I entered the shack and walked across the wood floor, then i had a sense of disappointment as i saw instant photographs on the ground. people would race all the way here as fast as they could, only to have their picture taken? there was no one here and no trace of any life other than the photos. \
                        \
                        I raced through the ether of life for substance, and it ended up being a shitty polaroid.\
                        ",
                        "I woke up at 7:30 AM had breakfast with my grandfather and sister my dad was out with the family and the elders were digging her grave in the rain.\
                        \
                        we drove to the house to gather the body and said a few blessings and loaded her into the truck.\
                        \
                        we rode in the back of the pickup in the rain to the church and I carried her into the church with the other men.\
                        \
                        we had a ceremony and set our goodbyes.\
                        \
                        I carried her with the others to the gravesite the rain made the clay stick on our shoes. we placed her into the grave.\
                        \
                        as I was the tallest I took her body first and laid her down into her resting place. we left her with her belongings, some food, and a basket of feathers.\
                        \
                        We each grabbed a pinch of cornmeal, Set our last goodbyes and sprinkled it into the grave.\
                        \
                        We brushed of the dust from our clothes back into the grave as it is flown up from the wind.\
                        \
                        we buried her with shovels and then said a blessing.\
                        \
                        An elder took the decorated pot that held the water used to bath her body and broke it over the mound of dirt as a symbol.\
                        \
                        when we return to the house all of the women washed our hands and chanted a prayer to me then we had a large meal together.\
                        \
                        We went back to the grave 2 days later but I didn't get out of the car.\
                        ",
                        "We walked into my great uncle Wilbert's house at around 4:30 PM.\
                        \
                        Immediately after walking in you could see a body wrapped in blue blankets on a tarp it was my grandma.\
                        \
                        There were chairs all around and lots of food we sat vigil until the elders came people brought offerings of baskets.\
                        \
                        some had Doritos in them.\
                        \
                        The women stood around the body and held a curtain up as the women elders took her out of the body bag and washed her body.\
                        \
                        They then put her in a native dress.\
                        \
                        One of the elders of the Golden Eagle clan came and blessed my grandmother he unfolded a Dr Pepper and Dallas Cowboys handkerchief and pulled out three feathers\
                        \
                        and put them in her hand and pulled out a blanket from a Walmart bag and wrapped her in it and covered her face with the green silk handkerchief.\
                        \
                        There was a mentally handicapped native woman chanting in the corner\
                        \
                        a\ll eight of them gathered and sang songs for two hours to guide her soul back home there was laughter\
                        \
                        we ate food it was like Christmas except my grandma was laying on the ground wrapped in blankets\
                        ",
                        "\
                        Yesterday was my day off.\
                        \
                        At first I didn't know what to do. I was sick so I walked the neighborhood and looked around for cold medicine.\
                        \
                        I bought a projector online then went and bought some video games in lower East Manhattan.\
                        \
                        Arjun met me there and we went and had some drinks in the financial district after my meeting.\
                        \
                        After that I did some light yoga, first time in a long time and it was very grounding.\
                        \
                        I felt amazing.\
                        \
                        After that we went to coyote ugly from the movies.\
                        \
                        We met some Europeans on vacation and a local lower Eastside are named Mitch he was wearing sunglasses the entire time.\
                        \
                        It got expensive so we decided to grab some drinks and head to the park.\
                        \
                        We drank and talked girls back-and-forth for about an hour.\
                        \
                        Arjun kept wondering why there are taxis driving down the waterfront strip and I knew that they were undercover cops.\
                        \
                        To came our way and they stopped us they searched everything we had and took us straight to jail.\
                        \
                        We went to bookings with no shoes on with the little Chinese man who is 70 years old he was stopped for pissing.\
                        \
                        We watch the cops watch the matrix and cracked jokes until 5 AM.\
                        \
                        Once they let us out we went to McDonald's and I had 2 mcgriddles but left one on the bench.\
                        \
                        We took the train home while everybody headed to work in the morning.\
                        ",
                        "Living the dream: \
                        \
                        what’s wrong with millennial today. people say they’re extremely conflicted and stunted in their maturity/growth. that because there are so many options in life they are paralyzed\
                        \
                        i used to stare at the guy with the mullet in my hometown neighborhood as a kid, watching him wash his t-bird in a sleeveless shirt and short ass jean shorts listening to gnr. he’s like super into it too, jerking around dancing like he’s practically in the past. he looks so alive.\
                        \
                        (acting doesn’t have to be a mirror of mundane reality)\
                        \
                        what interests me about watching this person is the parallels to the stage of nostalgia we are in as a culture at the moment. in an age where contemporiety is so discomforting that young people are deciding to turn back to (reprioritize, emphasize) their roots, to their youth, sends a message that there’s a sense of pride in the era that we as a generation were a part of and came from. what’s more is that each story is different;\ \
                        \
                        side note: imagining a series about 90s/00s LARPers; what if everyone else stayed contemporary, is there an unblemished replica of the era living today (like the mullet man)? are they walking down orchard ave carrying a duo-shock cd player wearing a tracksuit wearing a high top watching the sopranos wearing DCs playing Tony Hawk’s Pro Skater 2 (GTA III), all unironically, purely because they believe in that er\a\
                        \
                        idea: a 00s larper magazine that is the exact same style as Seventeen Magazine from the 200s but the magazine is called Twenty seven magazine\
                    ", "dream\
                        chinese food \
                        dog \
                        dog threw up \
                        dog knows that other chinese food is bad too \
                        dog protects back yard \
                        i let dog bite me \
                        i want in to the back patio storage \
                        slobbery unnatractive dog \
                        \
                        branchoes \
                        thidck and birittle\
                        i gotothe top \
                        this chick is telling me therere sa hilll down\
                        so nonchalnat\
                        \
                        \
                        i go to a family reuinion\
                        im carryinfgg a sihtter aroudn\
                        like a cross’\
                        everone is making funnof me \
                        i go back and forth \
                        they tell me what to do \
                        ",

                    "WAKING LIFE - 10 YEAR REVIEW\
                        i remember seeing waking life \
                        i was ten years younger, in college for the second time at 20 years old \
                        i used to watch this movie every night\
                        and take notes of my dreams \
                        read books about better dreaming\
                        and test myself \
                        i watched this movie after i got a minor in possesion of alcohol\
                        i went to this party\
                        justice was playing\
                        it was a kegger\
                        i spit in this girls drink (i was nihil-punk at the time) \
                        someone gave me a ride somewhere\
                        i got out and slammed the car door \
                        the lights were black and yellow\
                        i walked into the darkness\
                        and woke up in multiple places\
                        but i watched that movie after\
                        ",
                    ]
class Bronson
 extends Component {
  render() {
    return (
      <div>
          {albums.map(image => (
            <p className="writing">{image}</p>
          ))}         
      </div>
    );
  }
}
 
export default Bronson
;
