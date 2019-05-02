# public 
리액트는 가상 DOM을 사용하는데, 그게 들어갈 실제 html이 필요함. 그게 들어있는 곳.

# Directories
src/components: 각 컴포넌트들이 위치하는 디렉토리.
src/routes: 각 라우트들이 위치하는 디렉토리.
src/client: 브라우저 측에서 사용할 최상위 컴포넌트.
src/server: 서버측에서 사용 할 리액트 관련 코드... (Express 연동을 할 수 있다면)
src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트. (App.js..)
src/lib: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드.

# package.json, NODE_ENV
경로를 불러올 때 ../ 등을 사용하지 않고 루트경로를 바로 사용할 수 있도록 붙여줌.

# Route 파라미터
3개의 props를 가진다.
- history 이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.
- location 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.
- match 이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고 params (/about/:name 형식) 정보를 가지고있습니다.