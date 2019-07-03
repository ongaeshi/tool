def main(src)
  # eval(src)
  src.gsub('foo', 'bar')
  # src.scan(/foo/).join("\n")
end
