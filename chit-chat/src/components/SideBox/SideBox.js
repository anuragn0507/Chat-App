import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SideBox = () => {
  return (
    <View style={styles.locate}>
      <View style={styles.box}>
        <Text style={styles.text}>New group</Text>
        <Text style={styles.text}>Mark all read</Text>
        <Text style={styles.text}>Invite friends</Text>
        <Text style={styles.text}>Settings</Text>
        <Text style={styles.text}>Notification profile</Text>
      </View>
      {/* <View >
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quis culpa aspernatur provident tempora sapiente, totam aliquam aut nam fugit! Velit quidem alias laudantium corrupti! Accusantium, nostrum omnis. Cum minus debitis fuga deleniti voluptatum necessitatibus reiciendis voluptas dolorem pariatur autem recusandae consequuntur, doloremque natus ullam minima enim quae ipsum labore tempore sed neque. Fuga, non debitis, possimus nihil, eum tempore incidunt minus soluta provident alias nemo assumenda saepe quo. Consequatur eius, eos blanditiis laudantium adipisci rerum tempore, ullam repellendus ipsa obcaecati mollitia nihil commodi? Sequi iure, porro repellat molestiae, velit ullam architecto, quam aspernatur quasi possimus cum vero? Itaque necessitatibus ipsa rem quidem enim consequuntur natus fugiat ea alias porro suscipit, quod obcaecati quas iusto deleniti dolor praesentium ut molestias corporis libero animi inventore ab? Animi culpa consectetur quidem delectus sint quisquam perferendis. Officiis, provident. Repudiandae, iusto molestias! Sequi, omnis? Accusantium blanditiis libero quod necessitatibus iste assumenda facilis excepturi praesentium deserunt, totam perferendis corporis, harum distinctio accusamus reprehenderit. Aspernatur voluptatum deserunt sunt id, alias ea similique voluptatem est iste dolorem. Eos, consequuntur obcaecati atque tenetur veniam repudiandae, ea at ex pariatur cupiditate, in explicabo veritatis sint ipsum! Obcaecati nam, qui quasi ducimus magni numquam. Porro, corporis, maiores optio nulla earum vitae aut officiis accusamus sapiente, quisquam at aperiam labore quod blanditiis neque ipsum. Dolore sunt cumque voluptate inventore dolores nobis odit delectus alias similique vero ab laudantium minus voluptas nesciunt voluptates consequuntur ex, necessitatibus ut rerum laborum aperiam distinctio! Est harum, recusandae maxime quos tenetur ea odio fugiat, aliquid autem, rem voluptatem voluptatum similique! Aspernatur error excepturi amet ipsum exercitationem omnis? Repellat provident molestias sequi odio a numquam quos cumque. Dolorum, et dolorem. Libero doloribus fugiat cum quas corrupti pariatur reprehenderit nisi optio suscipit corporis tenetur dolores modi, culpa soluta necessitatibus vero adipisci nobis, dolorum numquam laborum! Debitis ipsa unde porro iste eveniet quia, inventore officia quae nemo id, assumenda ipsam ipsum. Voluptas repudiandae, at fugit nemo alias ab, accusantium saepe magni est cumque asperiores, dolores unde beatae dolorum quibusdam excepturi autem delectus dolor nulla veniam. Ratione cupiditate, sunt ad, eligendi atque at debitis dolorem illo libero eaque voluptas corrupti nostrum ab exercitationem deleniti dolore voluptates optio. Repudiandae numquam iste totam blanditiis aliquid quasi perspiciatis et rem laboriosam suscipit! Minima non, architecto totam corporis aliquid inventore soluta molestiae magnam modi! Illo esse suscipit dolores, reprehenderit voluptatibus quos maxime debitis id magnam ab nam minima placeat, voluptatum perspiciatis veritatis odit inventore mollitia. At officiis quasi ratione, suscipit laborum voluptatum nam necessitatibus doloribus aliquam nesciunt, aperiam obcaecati ipsa commodi ab quos repellendus perspiciatis cum sequi? Voluptas, cum dolorem nulla nobis saepe voluptate id. Quasi doloribus tempora ea quis error minima officiis, alias nobis impedit! Sapiente praesentium deleniti dignissimos ab, corporis ipsa sit molestiae pariatur ratione. Perspiciatis, corporis similique saepe odio, sit officiis pariatur quos iste fugit repudiandae architecto quae in, commodi porro. Est dignissimos vero voluptas quibusdam eum, distinctio facere deleniti provident. Blanditiis, unde, minus dolores consectetur quis nesciunt dignissimos porro expedita obcaecati laborum debitis facere corporis, commodi et. Cum, similique quasi?</Text>
      </View> */}
    </View>
  )
}

export default SideBox

const styles = StyleSheet.create({
    locate:{
        position: 'absolute',
        top:20,
        right:25,
        transparent:'true'
    },
    box:{
        borderWidth:1,
        backgroundColor:'#0d0d0d',
        padding:15,
        borderRadius:15,
        // height:'20vh',
        // width:'50%'
    },
    text:{
        color:'#fff',
        fontSize:22,
        marginBottom:12
    }
})
