import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import CreatePost from '../components/CreatePost';

export default function MainScreenPopular({navigation}) {
  //나중에 FlatList를 적용해야 한다.
  //const renderItem=() 을 통해서 DB에서 받아온 데이터를 CreatePost Prop으로 전달
  //keyExtractor를 잘 사용한다면, 최신과 인기를 잘 나눌 수 있지 않을까?(최신과 인기를 Prop으로 받아야한다.)
  const image = {
    book1: require('../../image/book1.png'),
    book2: require('../../image/book2.png'),
    book3: require('../../image/book5.jpg'),
    book4: require('../../image/book4.png'),
  };
  const contents = {
    content1:
      '현대사회에서 특히! 여성으로 살아가면서 털에 자유로울수 있는 사람이 있을까? 좀 뭐랄까 약간 입에 담기도 어색하고 아무짓도 안했는데 부끄럽기도하고 검색하다보면 유해단어라고 뜨기도 한다는 털! 에 관한 윰토끼님의 이야기',
    content2:
      "💡 총평 출퇴근길이나 자투리 시간에 읽기 좋은 책이다. 아쉬웠던 점은 '어떻게 글쓰기 수입을 10배 올렸는지', '현직 마케터로서 느낀 점은 무엇인지' 등 실무와 관련된 부분은 전혀 언급하고 있지 않다는 것이다. 그래도 글을 쓰는 사람이라면 한번쯤 <마케터의 문장>을 읽어보길 권한다.",
    content3:
      '공포영화를 그다지 좋아하지 않는 내가 <그것>을 손꼽아 기다린 까닭은 순전히 두 가지 이유 때문이었다. 전 세계적으로 화제를 불러일으켰다는 <그것> 예고편에 나 또한 홀딱 반했고, 그 예고편이 전부는 아닐 것이라는 믿음, 그러니까 아무리 영화를 못(?) 만들어도 웬만큼은 하겠지 하는 믿음이 있었기 때문이다. 스티븐 킹이 원작자이니까.',
    content4:
      '성공하는 사람들이 고정적인 한계를 정해놓지 않기 때문에 더 많은 기회가 있을 수밖에 없다고 합니다. 반면에 이 책에 나오는 다양한 좋은 마음가짐이 자신뿐만 아니라 타인에게도 긍정적인 영향을 주기 때문에 좀 더 좋은 결과를 이룰 수 있습니다.',
  };
  const UID = {
    id1: 'userA',
    id2: 'userB',
    id3: 'userC',
    id4: 'userD',
  };
  const likes = {
    like1: '16',
    like2: '45',
    like3: '23',
    like4: '4',
  };
  const comments = {
    comment1: '2',
    comment2: '0',
    comment3: '3',
    comment4: '1',
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <CreatePost
          style={styles.underBorder}
          image={image.book1}
          content={contents.content1}
          UID={UID.id1}
          comment={comments.comment1}
          like={likes.like1}
          navigation={navigation}
        />
        <CreatePost
          style={styles.underBorder}
          image={image.book2}
          UID={UID.id2}
          content={contents.content2}
          comment={comments.comment2}
          like={likes.like2}
          navigation={navigation}
        />
        <CreatePost
          style={styles.underBorder}
          image={image.book3}
          UID={UID.id3}
          like={likes.like3}
          content={contents.content3}
          comment={comments.comment3}
          navigation={navigation}
        />
        <CreatePost
          style={styles.underBorder}
          image={image.book4}
          UID={UID.id4}
          comment={comments.comment4}
          like={likes.like4}
          content={contents.content4}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  underBorder: {},
});
