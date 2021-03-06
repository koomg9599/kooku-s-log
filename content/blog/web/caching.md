---
title: caching
date: 2019-09-04 21:09:35
category: web
---

caching이란 저장한다는 뜻이다.
컴퓨터구조 시간에 배우겠지만 그때의 cache는 CPU와 mainmemory 사이에 왔다 갔다 하는 시간을 줄이기 위해 자주사용하는 것들을 저장하는 용도로 사용된다.

여기에서는 web 개발을 할때 사용되는 캐시를 다룰 것이다.

## Caching의 종류

### Web Caching

이미지나 자바스크립트와 같은 파일을 웹브라우저가 캐쉬하도록 하는 것이다. 이를 위해서는 웹서버에서 캐쉬 대상이 되는 데이터에 대한 특별한 처리가 필요하다.

해더에 Cache-Control 또는 expires 를 삽입한다.

### HTTP Reverse Proxy Caching

웹서버로 유입되는 HTTP 트래픽을 캐슁 시스템이 저장하고 있다가 동일한 요청이 들어왔을때 이 데이터를 돌려준다. 그러면 Proxy 서버에서 web server까지 가지 않고 요청을 처리해준다.

### Web Page Caching

Page Caching은 페이지 전체를 caching하는 방법인데, 동일 요청 페이지에 대한 caching을 생성해서 빠른 속도로 페이지를 제공할 수 있다.

캐쉬는 평시에도 중요 하지만 트래픽이 급증했을 때도 매우 중요하다. 서비스의 트래픽은 전반적으로 높아지기도 하지만, 특정 컨텐츠가 매스 미디어에 노출되는 등의 이유로 폭발적으로 급증하는 경우도 있다. 이런 경우 고려해볼만한 방법이 [웹페이지 캐슁](https://opentutorials.org/course/697/3839#webpagecaching)이다. 웹페이지를 캐슁하면 복잡한 프로세스를 타지 않고 파일에 저장된 내용을 그대로 전송하기 때문에 훨씬 많은 트래픽을 감당할 수 있다. 문제는 페이지 전체가 캐슁 되기 때문에 로그인한 사용자에 따라서 다르게 보여져야 할 부분이나 수정된 컨텐츠의 내용을 반영하기가 어렵거나 불가능하다. 이런 경우 폭증한 요청에 대해서만 웹페이지 캐슁을 사용한다면 전반적인 서비스의 품질을 유지하면서도 높은 응답속도를 유지할 수 있을 것이다.

### Partial Caching & Database Caching

데이터베이스의 데이터를 저장했다가 동일 요청이 있을 시 저장된 데이터를 사용한다.



## Caching의 문제

cache의 큰 문제는 저장한 값과 업데이트되는 값이 다를때이다. 웹브라우저 캐쉬를 예로 들어보자. 블로그의 이미지를 임시저장소에 저장하였고, 블로그에 접속할때마다 이미지를 캐시에서 꺼내와 보여주고 있는 상황에서 만약에 블로그의 이미지가 바뀌었을때 문제가 생긴다.

### TTL

TTL은 Time To Live라는 의미로 캐쉬를 생성할 때 캐쉬의 만료기간을 정해두는 것이다. 지정된 만료일이 지나면 캐쉬를 삭제한다.

### 명시적 삭제

캐쉬가 유효하지 않을 때 캐쉬를 명시적으로 삭제한다.



## 간단한 Cache 구현

### LRUC (Least Recently Used Cache)

LRU는 OS 페이지 교체 알고리즘중 하나로 가장 오랫동안 사용하지 않은 페이지를 교체하는 기법이다.

LRU Cache는 Doubly Linked List를 통해 구현된다. head에 가까운 데이터 일수록 최근에 사용한 데이터이고, tail에 가까울 수록 가장 오랫동안 사용하지 않은 데이터로 간주하여 새로운 데이터를 삽입할 때 가장 먼저 삭제되도록 한다. 

이렇게 되면 자주 사용되는 Data의 경우 tail까지 가지 않기에 우선순위가 높아 빠르게 Data를 불러올 수 있다.

### reference

* [Caching :: 생활코딩](https://opentutorials.org/course/697/3839)