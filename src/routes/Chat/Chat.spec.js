import Chat from './Chat.vue';
import { mount, shallowMount } from '@vue/test-utils';

describe("Chat Message Service",function(){
  it.todo("should return an array of messages");

  let wrapper = null;

  beforeEach(async()=>{
    wrapper = mount(Chat), {propsData: {}}
  });

  afterAll(async() => {
    console.info("Cleanup hook running.");
  });

  it("should match the snapshot", ()=> {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should have a list item for every message in props", ()=>{
    const shallowWrapper = shallowMount(Chat, { propsData: {
      messages:["Hello", "World"]
    }});

    expect(shallowWrapper.findAll(".message-display")).toHaveLength(2);
  });
});